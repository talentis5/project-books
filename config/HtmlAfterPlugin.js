const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginName = 'HtmlAfterPlugin';

const assetsHelp = (data) => {
  let js = [];
  const getAssetsName = {
    js: item => `<script src='${item}'></script>`
  }
  for (let jsitem of data.js) {
    js.push(getAssetsName.js(jsitem))
  }
  return {
    js,
  }
}
class HtmlAfterPlugin {
  constructor(){
    this.jsarr = [];
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlAfterPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        pluginName,
        (htmlPligunData, cb) => {
          // console.log('CCCCCCCCCCCCCCCC', htmlPligunData.assets)
          const { js } = assetsHelp(htmlPligunData.assets);
          this.jsarr = js;
          cb(null, htmlPligunData);
        }
      );
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'HtmlAfterPlugin',
        (data, cb) => {
          // console.log('bbbbbbbbBBBBBBBBB', data.plugin.assetJson)
          let _html = data.html;
          _html = _html.replace('<!-- injectjs -->', this.jsarr.join(''));
          _html = _html.replace(/@components/g, '../../../components');
          _html = _html.replace(/@layouts/g, '../../layouts');
          data.html = _html;
          cb(null, data)
        }
      )
    })
  }
}

module.exports = HtmlAfterPlugin;
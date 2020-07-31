'use strict';

const { extend } = require('lodash');
const { join } = require('path');

let config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
};
{
  let prodConfig = {
    port: 8082,
    memoryFlag: 'memory',
  };
  config = extend(config, prodConfig);
}

module.exports = config;

// 负责加载组件里 html页面里用到JavaScript脚本 webpack
// webpack反向把分析好的JS文件塞回到 <!-- injectcss --> 和<!-- injectjs -->
import banner from "@/components/banner/banner.js"
banner.init();
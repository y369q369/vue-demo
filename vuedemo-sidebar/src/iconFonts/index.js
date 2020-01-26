import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('svg-icon', SvgIcon)

// webpack 的 require.context(directory, useSubdirectories, regExp) 可以通过正则匹配引入相应的文件模块。
//      directory：          说明需要检索的目录
//      useSubdirectories：  是否检索子目录
//      regExp：             匹配文件的正则表达式
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
# 本项目已作废，替代项目为 [React-Study](https://github.com/minooo/React-Study)，欢迎交流学习。
这是一个基础的，综合了webpack，es6，react的学习模板。
> 
> 本模板也方便你对 react 生态圈中其他相关知识的学习，比如你想学习 `react-router`,`redux` 或是 `css-modules`都可以以此模板为基础进行延伸学习。甚至，你可以单纯的来学习es6!

# webpack-es6-react
本模板应用了以下技术

- [React](https://github.com/facebook/react)
- [Babel 6](http://babeljs.io/)
- [Webpack](http://webpack.github.io/) 我们的构建工具
- [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
- [React Transform](https://github.com/gaearon/react-transform-hmr) 可以让 React 组件局部自动实时更新（而不是刷新页面）

## Demo

![react-transform-boilerplate](https://raw.githubusercontent.com/minooo/test/master/demo.gif)

## 使用方法
```
git clone https://github.com/minooo/webpack-es6-react.git
cd webpack-es6-react 
npm install
npm start
打开 http://localhost:5000/
```

> 注意：package.json 的 scripts 中内置了三个命令
> - `start` 用于开发模式，方便调试，撸码。
> - `build` 开发完毕后，就可以打包文件了。
> - `lint` 检测你的js代码是否规范。


## package.json 中的 包/库 部分说明
- `babel-core` babel6 的基础模块
- `babel-eslint` [ESLint](https://github.com/eslint/eslint) 是前端JS代码检测利器。而 [babel-eslint](http://npm.taobao.org/package/babel-eslint) 则允许你检测所有的 Babel 代码。
- `babel-loader` 这个包允许你使用 Babel 和 webpack 转译（Transpiling） JavaScript 文件。
- `babel-plugin-react-transform` 这个插件通过任意转换的方式去封装 React 组件。换句话说，你可以随心所欲的摆弄你的组件了。
- `babel-plugin-transform-runtime` 在 Babel 转换过程中，详细的展示引用的相关辅助工具和内置命令，并自动的聚合填充你的代码而不会污染全局。
- `babel-preset-es2015` 此预设包含了所有的 es2015 插件。
- `babel-preset-react` 此预设包含了所有的 React 插件。
- `babel-preset-stage-0` 此预设包含了 stage 0 中的所有插件。
- `eslint` JavaScript 语法检测利器：分析出你代码潜在的错误和非标准用法。
- `eslint-plugin-react`  ESLint 中关于 React 语法检测的插件。
- `react-transform-hmr` 一个 React 转换装置，该装置通过引用 Hot Module Replacement API 使热重载 React 的类成为可能。
- `react-transform-catch-errors` 呈现你 React 组件的错误信息。
- `webpack-dev-server` 为 wepack app 提供一个服务器，如果你的代码有任何变化，浏览器将自动刷新显示，极大的方便前期开发。
- `babel-runtime` Babel 自带的运行环境。

## 根目录下文件部分说明
- `.babelrc` : 什么是 `.babelrc` 文件呢？熟悉 linux 的同学一定知道，rc 结尾的文件通常代表运行时自动加载的文件，配置等。同样在这里也是有同样作用的。里面的 `env` 字段，可以对 BABEL_ENV 或 NODE_ENV 指定不同的环境变量，进行不同编译。
- `eslintignore` 通知 `eslint` 忽略那些不应该被检测的文件。
- `eslintrc` eslint 配置文件，使 JavaScript 代码规范化，标准化书写。

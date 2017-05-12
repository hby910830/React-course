# React ES6 Version
This is a collection of simple demos of React.js for using ES6.

这是一个React使用ES6语法的简易教程,这个实例教程在阮一峰老师的[React入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)的基础上使用ES6重写而来

[origin github website](https://github.com/ruanyf/react-demos)

[原github地址](https://github.com/ruanyf/react-demos)
>你只需要跟着每一个 Demo 做一遍，就能初步掌握 React 。当然，前提是你必须拥有基本 JavaScript 和 DOM 知识，但是你读完就会发现，React 所要求的预备知识真的很少。

![](http://binaryify.github.io/images/react2.png)
# How to use
```
$ git clone git@github.com:zhuangtongfa/react-demos.git
```
use `http-server` in the folder,open the '127.0.0.1:8080'

# How to install http-server
```
npm install http-server -g
```

# HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../build/react.js"></script>
  <script src="../build/react-dom.js"></script>
  <script src="../build/browser.min.js"></script>
  <script type="text/babel" src=js/app.jsx>
  </script>
</head>
<body>
<div id="example">
</div>
</body>
</html>
```
# Class
```js
//ES5
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
          })
        }
      </ol>
    );
  }
});
```

```js
//ES6
class NotesList extends React.Component{
  render(){
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
          })
        }
      </ol>
    );
  }
}
```
# State
```js
//ES5
getInitialState: function() {
    return {liked: false};
  }
```

```js
//ES6
constructor(props) {
  super(props);
  this.state= {
    liked:false
  }
}
```
# isMounted
ES6 is no support `this.isMounted()`

# Event
```js
//ES5
<input type="text" value={value} onChange={this.handleChange} />
```
```js
//ES6
<input type="text" value={value} onChange={e=>{this.handleChange(e)}} />
```

# This is also hava a  React-webpack-ES6 demo
[github](https://github.com/zhuangtongfa/react-webpack-ES6-demo)

Try it!

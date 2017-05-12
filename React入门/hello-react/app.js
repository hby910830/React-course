//没有 JSX 的 React
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
ReactDOM.render(root, document.getElementById('example2'));


//React 让显示数据变得简单，当数据变化的时候，用户界面会自动同步更新。
var HelloWorld = React.createClass({
   render: function(){
       return (
           <p>
               Hello, <input type="text" placeholder="Your name here"/>!
               It is {this.props.date.toString()}
           </p>
       )
   }
});

setInterval(function(){
    ReactDOM.render(
        <HelloWorld date={new Date()} />,
        document.getElementById('example')
    )
}, 1000);


class MyComponent extends React.Component{
  handleClick(ev){
    console.log(ev)
    this.refs.myTextInput.focus()
  }
  render(){
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={ev=>{this.handleClick(ev)}} />
      </div>
    );
  }
}
ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);

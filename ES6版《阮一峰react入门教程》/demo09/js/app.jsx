class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      value: 'Hello!'
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    const value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={ev=>{this.handleChange(ev)}} />
        <p>{value}</p>
      </div>
    );
  }
}
ReactDOM.render(<Input/>, document.body);

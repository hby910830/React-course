const data = 123;
class MyTitle extends React.Component{
  propTypes: {
    title: React.PropTypes.string.isRequired,
  }
  render(){
    return <h1> {this.props.title} </h1>;
  }
}
ReactDOM.render(
  <MyTitle title={data} />,
  document.body
);

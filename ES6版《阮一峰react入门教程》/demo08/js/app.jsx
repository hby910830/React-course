class LikeButton extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      liked:false
    }
  }

  handleClick (event) {
    console.log(event)
    this.setState({liked: !this.state.liked});
  }
  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={event=>{this.handleClick(event)}}>
        You {text} this. Click to toggle.
      </p>
    );
  }
}
ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);

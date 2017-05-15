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
ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);

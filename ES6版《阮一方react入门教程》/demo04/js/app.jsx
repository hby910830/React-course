const HelloMessage=({name})=><h1>Hello {name}</h1>
ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);

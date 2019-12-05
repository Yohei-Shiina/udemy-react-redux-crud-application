import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//     <React.Fra>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I'm clicked!")}} />;
//     </React.Fra>
//     )
//   }
// }
const App = () => {
  return(
  <div>
    <Cat/>
    <Cat/>
    <Cat/>
    <Cat/>
  </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

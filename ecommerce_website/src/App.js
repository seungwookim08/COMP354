import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/js//NavBar";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
       <React.Fragment>
       <NavBar />
     </React.Fragment>
    );
  }
}



export default App;


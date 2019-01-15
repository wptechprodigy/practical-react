import React, { Component } from "react";
import "./App.css";
import Header from "../src/components/Header";
import HelloUser from "../src/components/HelloUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello from Waheed!" num={3500} />
        <HelloUser />
      </div>
    );
  }
}

export default App;

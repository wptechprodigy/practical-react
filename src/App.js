import React, { Component } from "react";
import "./App.css";
import Header from "../src/components/Header";
import HelloUser from "../src/components/HelloUser";
import FriendsContainer from "../src/components/FriendsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello from Waheed!" num={3500} />
        <HelloUser />
        <FriendsContainer />
      </div>
    );
  }
}

export default App;

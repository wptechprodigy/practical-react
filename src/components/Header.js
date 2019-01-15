import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{this.props.title}</h3>
        <p>{this.props.num}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    );
  }
}

export default Header;

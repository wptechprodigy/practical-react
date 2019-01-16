import React, { Component } from "react";

class HelloUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Brad"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App-header">
        <p>Hello {this.state.username}!</p>
        Change Name: <br />
        <br />
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default HelloUser;

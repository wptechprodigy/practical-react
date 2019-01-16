import React, { Component } from "react";

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = { newFriend: "" };

    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }

  updateNewFriend(event) {
    this.setState({
      newFriend: event.target.value
    });
  }

  handleAddNew() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ""
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}>Add New Friend</button>
      </div>
    );
  }
}

export class ShowList extends Component {
  render() {
    return (
      <div>
        <h3>Friends' List</h3>
        <ul>
          {this.props.names.map(friend => (
            <li>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AddFriend;

import React, { Component } from "react";
import AddFriend, { ShowList } from "./AddFriend";

class FriendsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jane Doe",
      friends: ["Susan Prik", "Lucky Stone", "John Snow", "Deanarys Targaryan"]
    };

    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState(state => ({
      friends: state.friends.concat([friend])
    }));
  }

  render() {
    return (
      <div className="App-header">
        <h3>Name: {this.state.name}</h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}

export default FriendsContainer;

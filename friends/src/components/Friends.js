import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from 'react-loader-spinner';

class Friends extends React.Component {
  constructor() {
    super();
    this.state = { friends: [] }; //set friends data to empty array
  }

  componentDidMount() {
    this.getFriends();
  }

  //getFriends function using axiosWithAuth to fetch data
  getFriends = () => {
    this.setState({ ...this.state });
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("Friends component data received", res);
        this.setState({ friends: res.data });
      })
      .catch((err) => {
        console.log(err, "friends component data error");
      });
  };

  render() {
    return (
      <div className="friends-list">
        <h2>List of Friends:</h2>
        {/* <Loader type="Puff" color="#00BFFF" height={100} width={100} /> */}
        {this.state.friends.map((friend) => (
          <div className="friendsData">{`${friend.name}, ${friend.age} years old`}</div>
        ))}
      </div>
    );
  }
}

export default Friends;

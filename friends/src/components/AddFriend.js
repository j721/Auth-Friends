import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: { name: "", age: "", email: "" },
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.friend)
      .then((res) => {
        console.log({ res }, "friends data returned");
      })
      .catch((err) => console.log(err));
  };

  changeHandler = (event) => {
    this.setState({
      friends: {
        ...this.state.friend,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="add-friend">
        <h2>Add Your Friend!</h2>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} name="name" />
          <input onChange={this.changeHandler} name="age" />
          <input onChange={this.changeHandler} name="email" />
          <button>Add</button>
        </form>
      </div>
    );
  }
} //end of AddFriend component

export default AddFriend;

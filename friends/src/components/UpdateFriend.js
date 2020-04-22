import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class UpdateFriend extends React.Component {
  constructor() {
    super();
    this.state = { id: "", name: "", age: "", email: "" };
  }

  submitHandler = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .put(`/api/friends/${this.state.id}`, this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} name="id" />
          <input onChange={this.changeHandler} name="name" />
          <input onChange={this.changeHandler} name="age" />
          <input onChange={this.changeHandler} name="email" />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriend;

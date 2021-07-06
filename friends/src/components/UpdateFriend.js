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
          <input onChange={this.changeHandler} name="id"
          placeholder="id"
          value={this.state.id}
          />

          <input onChange={this.changeHandler} name="name" 
          placeholder="name"
          value ={this.state.name}
          />

          <input onChange={this.changeHandler} name="age" 
          placeholder="age"
          value={this.state.age}
          />

          <input onChange={this.changeHandler} name="email"
          placeholder="email" 
          value={this.state.email}
          />

          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriend;

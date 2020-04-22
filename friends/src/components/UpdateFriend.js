import React from "react";
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
      this.setState({...this.state, [event.target.name]:event.target.value})
  };
}

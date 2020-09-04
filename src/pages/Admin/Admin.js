import React, { Component } from "react";
import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { headerTyping: "sssss", descriere: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //handles change in the input's value
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefualt();
  }

  render() {
    return (
      <div className="containerForm ">
        <form>
          <div className="desc">
            <p>
              <label for="typintDesc">Typing description:</label>
            </p>
            <input
              id="typintDesc"
              type="text"
              placeholder="typind description"
            />
          </div>
          <div className="desc">
            <p>
              <label for="description">Description:</label>
            </p>
            <input id="description" type="text" placeholder="Description" />
          </div>
          <button className="example_d">Submit</button>
        </form>
      </div>
    );
  }
}

export default Admin;

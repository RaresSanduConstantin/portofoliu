import React, { Component } from "react";
import { messageData } from "../../firebase/firebase";
import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { headerTyping: "sssss", descriere: "" };
    this.returnData();
  }

  handleChange(event) {
    //handles change in the input's value
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefualt();
  }

  returnData() {
    messageData.once("value", (snap) => {
      const obiectMesaj = snap.val();
      console.log(obiectMesaj);
    });
  }

  removeData() {}

  render() {
    return (
      <div className="containerForm">
        <form>
          <div className="desc">
            <p>
              <label>Typing description:</label>
            </p>
            <input
              id="typintDesc"
              type="text"
              placeholder="typind description"
            />
          </div>
          <div className="desc">
            <p>
              <label>Description:</label>
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

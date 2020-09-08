import React, { Component } from "react";
import { messageData } from "../../firebase/firebase";
import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { typingDesc: "", description: "" };

    this.returnData();

    this.adminMesaj = React.createRef();
  }

  handleTypingChange = (event) => {
    //handles change in the input's value
    this.setState({ typingDesc: event.target.value });
  };

  handleDescriptionChange = (event) => {
    //handles change in the input's value
    this.setState({ description: event.target.value });
  };

  handleSubmitAdmin(e) {
    console.log(this.state.typingDesc, this.state.description);
    e.preventDefualt();
  }

  returnData() {
    messageData.once("value", (snap) => {
      const obiectMesaj = snap.val();
      // console.log(obiectMesaj);
      for (const p in obiectMesaj) {
        console.log(`${p}:`, obiectMesaj[p].email);
      }
    });
  }

  removeData() {}

  render() {
    return (
      <div className="containerForm">
        <form>
          <div className="desc">
            <h1 className="h1">Header Page!</h1>
            <p className="p">
              <label>Typing description:</label>
            </p>
            <input
              id="typintDesc"
              type="text"
              placeholder="typind description"
              value={this.typingDesc}
              onChange={this.handleTypingChange}
            />

            <p className="p">
              <label>Description:</label>
            </p>
            <input
              id="description"
              type="text"
              placeholder="Description"
              value={this.description}
              onChange={this.handleDescriptionChange}
            />
            <h1 className="h1">Work Page</h1>
            <p className="p">
              <label>Update Work:</label>
            </p>
            <input
              className="inputWork"
              id="imgUrl"
              type="text"
              placeholder="imgUrl"
            />
            <input
              className="inputWork"
              id="titleUrl"
              type="text"
              placeholder="titleUrl"
            />
            <input
              className="inputWork"
              id="descriptionUrl"
              type="text"
              placeholder="descriptionUrl"
            />
            <input
              className="inputWork"
              id="viewCodeBase"
              type="text"
              placeholder="viewCodeBase"
            />
            <input
              className="inputWork"
              id="viewAppLive"
              type="text"
              placeholder="viewAppLive"
            />
            <h1 className="h1">Contact Mesaj</h1>
            <div className="contactMesaj">
              <div></div>
            </div>
            <button onClick={this.handleSubmitAdmin} className="buttonSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Admin;

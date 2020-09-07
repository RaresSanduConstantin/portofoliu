import React, { Component } from "react";
import { messageRef } from "../../firebase/firebase";

export class MessageBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messageRef: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.messageRef().on("value", (snapshot) => {
      // convert messageRef list from snapshot

      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.props.firebase.messageRef().off();
  }

  render() {
    const { messageRef, loading } = this.state;

    return (
      <div>
        {loading && <div>Loading ...</div>}

        <MessageList messageRef={messageRef} />
      </div>
    );
  }
}

const MessageList = ({ messageRef }) => (
  <ul>
    {messageRef.map((message) => (
      <MessageItem key={message.uid} message={message} />
    ))}
  </ul>
);

const MessageItem = ({ message }) => (
  <li>
    <strong>{message.userId}</strong> {message.text}
  </li>
);

export default MessageBase;

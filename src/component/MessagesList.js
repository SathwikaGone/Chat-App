import React from "react";
import ProtoType from "prop-types";
import Messages from "./Messages";
import { connect } from "react-redux";

function MessagesList({ messages }) {
  return (
    <section id="messages-list">
      <ul>
        {messages.map(message => (
          <Messages key={message.id} {...message}></Messages>
        ))}
      </ul>
    </section>
  );
}

MessagesList.protoType = {
  messages: ProtoType.arrayOf(
    ProtoType.shape({
      id: ProtoType.number.isRequired,
      message: ProtoType.string.isRequired,
      author: ProtoType.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.messagesReducer
  };
};

export default connect(mapStateToProps)(MessagesList);

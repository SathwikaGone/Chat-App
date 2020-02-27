import React from "react";
import ProtoType from "prop-types";

export default function Messages({ message, author }) {
  return (
    <p>
      <i> {author}</i>: {message}
    </p>
  );
}

Messages.ProtoType = {
  message: ProtoType.string.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Actions from "../redux/actions";

function AddMessage(props) {
  let input;
  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.dispatch(Actions.addMessage(input.value, "Me"));
            input.value = "";
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch: dispatch(Actions.addMessage(message, author))
//   };
// };

export default connect()(AddMessage);

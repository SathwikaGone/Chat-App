import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";

const chat = combineReducers({
  messagesReducer: messages,
  usersReducer: users
});

export default chat;

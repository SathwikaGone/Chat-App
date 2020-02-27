import * as Types from "./types";
let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => {
  return {
    type: Types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
  };
};

export const addUser = name => {
  return { type: Types.ADD_USER, id: nextUserId++, name };
};

export const messageReceived = (message, author) => {
  return {
    type: Types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
  };
};

export const usersList = users => {
  return {
    type: Types.USERS_LIST,
    users
  };
};

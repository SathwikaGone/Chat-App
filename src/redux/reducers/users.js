import * as Types from "../actions/types";

const user = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_USER:
      return state.concat([
        {
          name: action.name,
          id: action.id
        }
      ]);
    case Types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};
export default user;

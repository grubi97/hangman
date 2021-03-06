import { User } from "../../../interfaces/user";
import { UserLoginTypes } from "../action-types";
import { Action } from "../actions";

const initialState: User = {
  username: "",
};

function userReducer(state = initialState, action: Action): User {
  switch (action.type) {
    case UserLoginTypes.Login:
      return {
        ...state,
        username: action.payload.username,
      };

    default:
      return state;
  }
}

export default userReducer;

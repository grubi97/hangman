import { User } from "../../../interfaces/user";
import { ModalActionTypes, UserLoginTypes } from "../action-types";
import { Action } from "../actions";

const initialState: User = {
  username: null,
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

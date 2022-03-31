import { ModalActionTypes } from "../action-types";
import { Action, ModalState } from "../actions";



const initialState: ModalState = {
  body: null,
  open: false,
};

function modalReducer(state = initialState, action: Action): ModalState {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        body: action.payload?.body,
        open: action.payload?.open,
      };
    case ModalActionTypes.HideModal:
      return {
        ...state,
        body: null,
        open: false,
      };
    default:
      return state;
  }
}

export default modalReducer;

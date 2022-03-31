import axios from "axios";
import { Dispatch } from "react";
import { RandomWord } from "../../../interfaces/randomword";
import { User } from "../../../interfaces/user";
import {
  ModalActionTypes,
  RandomWordTypes,
  UserLoginTypes,
} from "../action-types";
import { Action, ModalState } from "../actions";

export function showModal(payload: ModalState) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ModalActionTypes.ShowModal,
      payload,
    });
  };
}

export function hideModal(payload: ModalState) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ModalActionTypes.HideModal,
      payload,
    });
  };
}

export function login(payload: User) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UserLoginTypes.Login,
      payload,
    });
  };
}



import { User } from "../../../interfaces/user";
import { ModalActionTypes, UserLoginTypes } from "../action-types";

export type ModalState = {
  body: JSX.Element | null;
  open: boolean;
};

export interface ModalAction {
  type: ModalActionTypes;
  payload: ModalState;
}
export interface UserLoginAction{
  type: UserLoginTypes;
  payload: User;
}

export type Action = ModalAction | UserLoginAction;

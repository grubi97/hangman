import { RandomWord } from "../../../interfaces/randomword";
import { User } from "../../../interfaces/user";
import { ModalActionTypes, RandomWordTypes, UserLoginTypes } from "../action-types";

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

export interface RandomWordAction{
  type:RandomWordTypes;
  payload?:RandomWord 
}

export type Action = ModalAction | UserLoginAction|RandomWordAction;

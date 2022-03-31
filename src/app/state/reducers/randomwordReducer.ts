import { RandomWord } from "../../../interfaces/randomword";
import { RandomWordTypes } from "../action-types";
import { Action } from "../actions";

const initialState: RandomWord = {
  _id: "",
  content: "",
  length: 0,
  loading:true
};

function randomwordreducer(state = initialState, action: Action) {
  switch (action.type) {
    case RandomWordTypes.FetchSuccess:
      return {
        ...state,
        content: action.payload!.content,
        _id: action.payload!._id,
        length: action.payload!.length,
        loading:false
      };
    case RandomWordTypes.FetchRequest:
      return {
        ...state,
        loading:true

      };
    default:
      return state;
  }
}

export default randomwordreducer;

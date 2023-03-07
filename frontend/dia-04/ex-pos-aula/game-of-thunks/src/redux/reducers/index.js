import { combineReducers } from "redux";

const INITIAL_STATE = { 
  name: '',
  born: '',
  playedBy: '',
  url: '',                                                                               
}

const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    default: return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;
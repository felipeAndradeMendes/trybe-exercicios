import { combineReducers } from "redux";

const INITIAL_STATE = { 
  name: '',
  born: '',
  playedBy: '',
  url: '',  
  loading: false,
  showError: false,
}

const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case 'getChar':
      return {
        ...state,
        loading: true,
      }

    case 'showChar':
      return {
        ...state,
        ...actions.payload,
        loading: false,
      }

      case 'showError':
        return {
          ...state,
          showError: true,
        }
    default: return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;
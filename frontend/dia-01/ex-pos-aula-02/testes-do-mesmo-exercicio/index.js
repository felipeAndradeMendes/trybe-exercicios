import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {    
    case 'STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      };
      break;

      case 'THEME':
        return {
          ...state,
          theme: state.theme === 'dark' ? 'light' : 'dark',
        };
        break;

      default:
        return state;
  }
}



const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'THEME'});
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'STATUS' });
});



store.subscribe(() => {
  const state = store.getState();
  const body = document.querySelector('body');
  const status = document.getElementById('status');

  console.log('STATE:', state.theme)

  if (state.theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }


  if (state.status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    status.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    status.innerText = 'Offline';
  }
})
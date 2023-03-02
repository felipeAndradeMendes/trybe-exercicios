import { legacy_createStore as createStore } from "redux";

const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerHTML = counter;
};

// showCountValue("0");
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = {
  type: INCREMENTO
};

const actionDecremento = {
  type: DECREMENTO
};
// ========== REDUCER ==========
const initialState = { count: 0 };

const reducer = (state = initialState, action) => {

  // if (action.type === INCREMENTO) {
  //   return { count: state.count + 1 };
  // } 
  // if (action.type === DECREMENTO) {
  //   return { count: state.count - 1};
  // }

  switch (action.type) {
    case INCREMENTO: {
      // console.log('STATE COUNT:', state.count)
      return {        
        count: state.count + 1,
      };
    }
    case DECREMENTO: {
      return {
        count: state.count - 1,
      };      
    }
    default: return state
  }
};

// ========== STORE ==========
const store = createStore(reducer);
// console.log(store);
store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter.count);
  console.log(counter.count);

  const h1Element = document.getElementById("counter");
  h1Element.innerHTML = counter.count;

});

// ========== ELEMENTOS E LISTENERS ==========
const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", () => {
  // console.log("cliquei no incremento");
  store.dispatch(actionIncremento);
});
btnDec.addEventListener("click", () => {
  // console.log("cliquei no decremento");
  store.dispatch(actionDecremento);
});

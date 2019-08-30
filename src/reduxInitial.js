// Implementing redux in plain JS
const { createStore } = require("redux");

const initialState = {
  age: 21
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.payload;
  }
  if (action.type === "SUBTRACT") {
    newState.age -= 1;
  }

  return newState;
};

const store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "ADD", payload: 10 });
store.dispatch({ type: "SUBTRACT" });

const initialState = {
  counters: [
    { id: 1, value: 10, selectedName: "Virat" },
    { id: 2, value: 20, selectedName: "Kohli" },
    { id: 3, value: 30, selectedName: "Kannan" }
  ],
  loggedIn: false
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "VALUE_UP": {
      const counters = [...newState.counters];
      const index = counters.indexOf(action.payload);
      counters[index] = { ...action.payload };
      counters[index].value++;
      newState.counters = counters;
      break;
    }
    case "LOGIN_TOGGLE": {
      newState.loggedIn = !newState.loggedIn;
      break;
    }
    case "DELETE": {
      newState.counters = newState.counters.filter(
        elem => elem.id !== action.payload
      );
      break;
    }
    case "RESET": {
      newState.counters = newState.counters.map(counter => {
        counter.value = 0;
        return counter;
      });
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};

export default reducer;

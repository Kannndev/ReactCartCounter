export const valueUp = counter => {
  return { type: "VALUE_UP", payload: counter };
};

export const loginToggle = () => {
  return {
    type: "LOGIN_TOGGLE"
  };
};

export const deleteCounter = counterId => {
  return {
    type: "DELETE",
    payload: counterId
  };
};

export const resetAsync = () => {
  return { type: "RESET" };
};

export const reset = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(resetAsync());
    }, 3000);
  };
};

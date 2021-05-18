let stateInicial = {
  time: new Date().getTime(),
};

export default function rootReducer(state = stateInicial, action) {
  state = {
    ...state,
  };

  switch (action.type) {
    case "SET_TIME":
      return {
        ...state,
        time: action.valor,
      };

    default:
      return state;
  }
}

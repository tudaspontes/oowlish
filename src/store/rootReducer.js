let stateInicial = {
  timeTables: [{ passo: 1}]
};

export default function rootReducer(state = stateInicial, action) {
  state = {
    ...state,
  };

  switch (action.type) {
    case "SET_TIME":
      return {
        ...state,
        timeTables: action.value,
      };

    default:
      return state;
  }
}

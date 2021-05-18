let stateInicial = {
  pesquisar: { isAtivo: false, txt: "" },
};

export default function rootReducer(
  state = stateInicial,
  action: { type: any; valor: any }
) {
  state = {
    ...state,
  };

  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        ...state,
        toogleSidebar: action.valor,
      };

    default:
      return state;
  }
}

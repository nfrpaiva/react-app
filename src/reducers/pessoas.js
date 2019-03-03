const pessoas = (state = [{ nome: "Nilton", idade: 39 }], action) => {
  switch (action.type) {
    case "PREFILL_PESSOAS":
      return [...action.payload];
    default:
      return state;
  }
};

export default pessoas;

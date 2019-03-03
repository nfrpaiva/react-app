import { FILTER, PREFILL, DELETE, ADD } from "../actions/contatos";
const initialState = [
  {
    name: "teste",
    id: -1,
    email: "zequina@teste.com",
    userName: "Democrata"
  }
];
const contatos = (state = initialState, action) => {
  switch (action.type) {
    case PREFILL:
      return [...action.payload];
    case ADD:
      return [...state, { ...action.payload }];
    case DELETE:
      return state.filter(s => s.id !== action.payload);
    default:
      return state;
  }
};

export default contatos;

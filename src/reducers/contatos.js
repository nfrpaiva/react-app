import { PREFILL, DELETE, ADD } from "../actions/contatos";
const initialState = [];
const contatos = (state = initialState, { type, payload }) => {
  switch (type) {
    case PREFILL:
      return [...payload];
    case ADD:
      return [...state, { ...payload }];
    case DELETE:
      return state.filter(s => s.id !== payload);
    default:
      return state;
  }
};

export default contatos;

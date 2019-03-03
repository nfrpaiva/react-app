const initialState = [
  {
    name: "teste",
    id: -1,
    email: "zequina@teste.com",
    userName: "Democrata"
  }
];
let full = [];
const contatos = (state = initialState, action) => {
  switch (action.type) {
    case "PREFILL":
      full = [...action.payload];
      return [...full];
    case "FILTER":
      if (action.payload.length === 0) {
        return [...full];
      } else {
        return state.filter(c =>
          c.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    case "ADD":
      full = [...state, { ...action.payload }];
      return [...state, { ...action.payload }];
    case "DELETE":
      full = state.filter(s => s.id != action.payload);
      return state.filter(s => s.id != action.payload);
    default:
      return state;
  }
};

export default contatos;

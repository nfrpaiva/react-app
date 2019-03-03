export const PREFILL = "contato:PREFILL";
export const FILTER = "contato:FILTER";
export const DELETE = "contato:DELETE";
export const ADD = "contato:ADD";
export function preFill(contatos) {
  return {
    type: PREFILL,
    payload: contatos
  };
}
export function del(key) {
  return {
    type: DELETE,
    payload: key
  };
}
export function add(contato) {
  return {
    type: ADD,
    payload: contato
  };
}

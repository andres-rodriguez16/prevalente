import { GET__EMPRESAS, OPEN_MODAL, CLOSE_MODAL } from "./actions";

const initialState = {
  empresas: [],
  modal: false
};

function reducerEmpresa(state = initialState, action) {
  if (action.type === GET__EMPRESAS) {
    return {
      ...state,
      empresas: action.payload
    }
  }
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      modal: action.payload
    }
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      modal: action.payload
    }
  }
  return state
}

export default reducerEmpresa;
import { GET__EMPRESAS, OPEN_MODAL } from "./actions";

const initialState = {
  empresas: [],
  modal : false
};

function reducerEmpresa(state = initialState, action) {
  if (action.type === GET__EMPRESAS) {
    return {
      ...state,
      empresas : action.payload
    }
  }
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      modal : true
    }
  }
  return state
}

export default reducerEmpresa;
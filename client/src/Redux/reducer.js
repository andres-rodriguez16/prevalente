import { GET__EMPRESAS } from "./actions";

const initialState = {
  empresas: [],
  
};

function reducerEmpresa(state = initialState, action) {
  if (action.type === GET__EMPRESAS) {
    return {
      ...state,
      empresas : action.payload
    }
  }
  return state
}

export default reducerEmpresa;
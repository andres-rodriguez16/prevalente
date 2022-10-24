import axios from 'axios';

export const GET__EMPRESAS  = "GET_VIDEOGAMES";

export function getEmpresas() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/Empresa")
      dispatch({
        type: GET__EMPRESAS,
        payload: response.data
      })
    } catch (error) {
      throw error
    }
  }
}
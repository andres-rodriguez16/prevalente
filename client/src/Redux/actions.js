import axios from 'axios';

export const GET__EMPRESAS = "GET_VIDEOGAMES";

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

export function aprobacionDeEmpresa(id, payload) {
  return async function () {
    try {
      console.log(payload);
      const response = await axios.put(`http://localhost:3001/Empresa/aprobada/${id}?booleano=${payload}`,)
      console.log(response);
    } catch (error) {
      throw error
    }
  }
}

export function RechazoDeEmpresa(id, payload) {
  return async function () {
    try {
      console.log(payload);
      const response = await axios.put(`http://localhost:3001/Empresa/rechazada/${id}?booleano=${payload}`,)
      console.log(response);
    } catch (error) {
      throw error
    }
  }
}
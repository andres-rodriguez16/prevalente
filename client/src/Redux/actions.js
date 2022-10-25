import axios from 'axios';

export const GET__EMPRESAS = "GET_VIDEOGAMES";
export const OPEN_MODAL = "OPEN_MODAL"
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
      const response = await axios.put(`http://localhost:3001/Empresa/aprobada/${id}?booleano=${payload}`,)
    } catch (error) {
      throw error
    }
  }
}

export function RechazoDeEmpresa(id, payload) {
  return async function () {
    try {
      const response = await axios.put(`http://localhost:3001/Empresa/rechazada/${id}?booleano=${payload}`,)
      console.log(response);
    } catch (error) {
      throw error
    }
  }
}

export function openModal() {
  return async function (dispatch) {
    dispatch({
      type: OPEN_MODAL,
      payload: true
    })
  }
}
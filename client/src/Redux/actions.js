import axios from 'axios';

export const GET__EMPRESAS = "GET_VIDEOGAMES";
export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export function getEmpresas() {
  return async function (dispatch) {
    try {
      const response = await axios("Empresa")
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
      await axios.put(`Empresa/aprobada/${id}?booleano=${payload}`,)
    } catch (error) {
      throw error
    }
  }
}

export function RechazoDeEmpresa(id, payload) {
  return async function () {
    try {
      console.log(axios.defaults.url);
      const response = await axios.put(`Empresa/rechazada/${id}?booleano=${payload}`,)
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

export function closeModal() {
  return async function (dispatch) {
    dispatch({
      type: CLOSE_MODAL,
      payload: false
    })
  }
}

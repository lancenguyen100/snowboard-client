import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllSnowboards = () => {
    return axios(`${apiUrl}/snowboards`)
}

export const getOneSnowboard = (id) => {
    return axios(`${apiUrl}/snowboards/${id}`)
}
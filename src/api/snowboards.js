import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllSnowboards = () => {
    return axios(`${apiUrl}/snowboards`)
}

export const getOneSnowboard = (id) => {
    return axios(`${apiUrl}/snowboards/${id}`)
}

export const createSnowboard = (user, newSnowboard) => {
    // in our createSnowboard form, we are building an object
    // when we pass that object into the api createSnowboard function,
    // it is going to look like the snowboards in our database
    // we are going to refer to this a newSnowboard
    console.log("this is user", user)
    console.log("this is newSnowboard", newSnowboard)
	return axios({
		url: apiUrl + "/snowboards",
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { snowboard: newSnowboard },
	})
}

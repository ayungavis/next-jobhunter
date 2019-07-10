import axios from "axios"

import server from "../../config/server"

export const getUser = token => {
	return {
		type: "GET_USER",
		payload: axios({
			method: "get",
			url: `${server.api}/users`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserInfo = (id, token) => {
	return {
		type: "GET_USER_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users?id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUser = (token, body) => {
	return {
		type: "CREATE_USER",
		payload: axios({
			method: "post",
			url: `${server.api}/users`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUser = (token, body) => {
	return {
		type: "UPDATE_USER",
		payload: axios({
			method: "put",
			url: `${server.api}/users`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUser = (token, body) => {
	return {
		type: "DELETE_USER",
		payload: axios({
			method: "delete",
			url: `${server.api}/users`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

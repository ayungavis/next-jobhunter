import axios from "axios"

import server from "../../../config/server"

export const getUserJob = token => {
	return {
		type: "GET_USERJOB",
		payload: axios({
			method: "get",
			url: `${server.api}/users/jobs`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserJobInfo = (id, token) => {
	return {
		type: "GET_USERJOB_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/jobs?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserJob = (token, body) => {
	return {
		type: "CREATE_USERJOB",
		payload: axios({
			method: "post",
			url: `${server.api}/users/jobs`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserJob = (token, body) => {
	return {
		type: "UPDATE_USERJOB",
		payload: axios({
			method: "put",
			url: `${server.api}/users/jobs`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserJob = (token, body) => {
	return {
		type: "DELETE_USERJOB",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/jobs`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

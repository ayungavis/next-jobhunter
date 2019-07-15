import axios from "axios"

import server from "../../../config/server"

export const getUserProject = token => {
	return {
		type: "GET_USERPROJECT",
		payload: axios({
			method: "get",
			url: `${server.api}/users/projects`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserProjectInfo = (id, token) => {
	return {
		type: "GET_USERPROJECT_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/projects?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserProject = (token, body) => {
	return {
		type: "CREATE_USERPROJECT",
		payload: axios({
			method: "post",
			url: `${server.api}/users/projects`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserProject = (token, body) => {
	return {
		type: "UPDATE_USERPROJECT",
		payload: axios({
			method: "put",
			url: `${server.api}/users/projects`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserProject = (token, body) => {
	return {
		type: "DELETE_USERPROJECT",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/projects`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

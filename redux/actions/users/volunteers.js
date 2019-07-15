import axios from "axios"

import server from "../../../config/server"

export const getUserVolunteer = token => {
	return {
		type: "GET_USERVOLUNTEER",
		payload: axios({
			method: "get",
			url: `${server.api}/users/volunteers`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserVolunteerInfo = (id, token) => {
	return {
		type: "GET_USERVOLUNTEER_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/volunteers?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserVolunteer = (token, body) => {
	return {
		type: "CREATE_USERVOLUNTEER",
		payload: axios({
			method: "post",
			url: `${server.api}/users/volunteers`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserVolunteer = (token, body) => {
	return {
		type: "UPDATE_USERVOLUNTEER",
		payload: axios({
			method: "put",
			url: `${server.api}/users/volunteers`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserVolunteer = (token, body) => {
	return {
		type: "DELETE_USERVOLUNTEER",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/volunteers`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

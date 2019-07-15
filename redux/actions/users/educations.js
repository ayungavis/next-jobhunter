import axios from "axios"

import server from "../../../config/server"

export const getUserEducation = token => {
	return {
		type: "GET_USEREDUCATION",
		payload: axios({
			method: "get",
			url: `${server.api}/educations`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserEducationInfo = (id, token) => {
	return {
		type: "GET_USEREDUCATION_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/educations?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserEducation = (token, body) => {
	return {
		type: "CREATE_USEREDUCATION",
		payload: axios({
			method: "post",
			url: `${server.api}/educations`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserEducation = (token, body) => {
	return {
		type: "UPDATE_USEREDUCATION",
		payload: axios({
			method: "put",
			url: `${server.api}/educations`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserEducation = (token, body) => {
	return {
		type: "DELETE_USEREDUCATION",
		payload: axios({
			method: "delete",
			url: `${server.api}/educations`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

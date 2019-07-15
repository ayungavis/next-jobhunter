import axios from "axios"

import server from "../../../config/server"

export const getUserLanguage = token => {
	return {
		type: "GET_USERLANGUAGE",
		payload: axios({
			method: "get",
			url: `${server.api}/users/languages`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserLanguageInfo = (id, token) => {
	return {
		type: "GET_USERLANGUAGE_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/languages?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserLanguage = (token, body) => {
	return {
		type: "CREATE_USERLANGUAGE",
		payload: axios({
			method: "post",
			url: `${server.api}/users/languages`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserLanguage = (token, body) => {
	return {
		type: "UPDATE_USERLANGUAGE",
		payload: axios({
			method: "put",
			url: `${server.api}/users/languages`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserLanguage = (token, body) => {
	return {
		type: "DELETE_USERLANGUAGE",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/languages`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

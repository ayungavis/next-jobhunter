import axios from "axios"

import server from "../../../config/server"

export const getUserSocial = token => {
	return {
		type: "GET_USERSOCIAL",
		payload: axios({
			method: "get",
			url: `${server.api}/users/social-medias`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserSocialInfo = (id, token) => {
	return {
		type: "GET_USERSOCIAL_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/social-medias?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserSocial = (token, body) => {
	return {
		type: "CREATE_USERSOCIAL",
		payload: axios({
			method: "post",
			url: `${server.api}/users/social-medias`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserSocial = (token, body) => {
	return {
		type: "UPDATE_USERSOCIAL",
		payload: axios({
			method: "put",
			url: `${server.api}/users/social-medias`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserSocial = (token, body) => {
	return {
		type: "DELETE_USERSOCIAL",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/social-medias`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

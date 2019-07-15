import axios from "axios"

import server from "../../../config/server"

export const getUserSkill = token => {
	return {
		type: "GET_USERSKILL",
		payload: axios({
			method: "get",
			url: `${server.api}/users/skills`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserSkillInfo = (id, token) => {
	return {
		type: "GET_USERSKILL_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/skills?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserSkill = (token, body) => {
	return {
		type: "CREATE_USERSKILL",
		payload: axios({
			method: "post",
			url: `${server.api}/users/skills`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserSkill = (token, body) => {
	return {
		type: "UPDATE_USERSKILL",
		payload: axios({
			method: "put",
			url: `${server.api}/users/skills`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserSkill = (token, body) => {
	return {
		type: "DELETE_USERSKILL",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/skills`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

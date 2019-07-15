import axios from "axios"

import server from "../../../config/server"

export const getUserAchievement = token => {
	return {
		type: "GET_USERACHIEVEMENT",
		payload: axios({
			method: "get",
			url: `${server.api}/users/achievements`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserAchievementInfo = (id, token) => {
	return {
		type: "GET_USERACHIEVEMENT_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/achievements?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserAchievement = (token, body) => {
	return {
		type: "CREATE_USERACHIEVEMENT",
		payload: axios({
			method: "post",
			url: `${server.api}/users/achievements`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserAchievement = (token, body) => {
	return {
		type: "UPDATE_USERACHIEVEMENT",
		payload: axios({
			method: "put",
			url: `${server.api}/users/achievements`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserAchievement = (token, body) => {
	return {
		type: "DELETE_USERACHIEVEMENT",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/achievements`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

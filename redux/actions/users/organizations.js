import axios from "axios"

import server from "../../../config/server"

export const getUserOrganization = token => {
	return {
		type: "GET_USERORGANIZATION",
		payload: axios({
			method: "get",
			url: `${server.api}/users/organizations`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getUserOrganizationInfo = (id, token) => {
	return {
		type: "GET_USERORGANIZATION_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/users/organizations?user_id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createUserOrganization = (token, body) => {
	return {
		type: "CREATE_USERORGANIZATION",
		payload: axios({
			method: "post",
			url: `${server.api}/users/organizations`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateUserOrganization = (token, body) => {
	return {
		type: "UPDATE_USERORGANIZATION",
		payload: axios({
			method: "put",
			url: `${server.api}/users/organizations`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteUserOrganization = (token, body) => {
	return {
		type: "DELETE_USERORGANIZATION",
		payload: axios({
			method: "delete",
			url: `${server.api}/users/organizations`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

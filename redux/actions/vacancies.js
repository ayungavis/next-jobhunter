import axios from "axios"

import server from "../../config/server"

export const searchVacancy = params => {
	return {
		type: "SEARCH_VACANCY",
		payload: axios({
			method: "get",
			url: `${server.api}/jobs?search=${params}`
		})
	}
}

export const getVacancy = token => {
	return {
		type: "GET_VACANCY",
		payload: axios({
			method: "get",
			url: `${server.api}/jobs`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const getVacancyInfo = (id, token) => {
	return {
		type: "GET_VACANCY_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/jobs?id=${id}`,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const createVacancy = (token, body) => {
	return {
		type: "CREATE_VACANCY",
		payload: axios({
			method: "post",
			url: `${server.api}/jobs`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const updateVacancy = (token, body) => {
	return {
		type: "UPDATE_VACANCY",
		payload: axios({
			method: "put",
			url: `${server.api}/jobs`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

export const deleteVacancy = (token, body) => {
	return {
		type: "DELETE_VACANCY",
		payload: axios({
			method: "delete",
			url: `${server.api}/jobs`,
			data: body,
			headers: {
				Authorization: `${token}`
			}
		})
	}
}

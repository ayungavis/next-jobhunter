const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const vacancies = (state = initialState, action) => {
	switch (action.type) {
		case "GET_VACANCY_PENDING":
			return { ...state, isLoading: true }

		case "GET_VACANCY_REJECTED":
			return { ...state, isLoading: false }

		case "GET_VACANCY_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_VACANCY_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_VACANCY_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_VACANCY_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_VACANCY_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_VACANCY_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_VACANCY_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_VACANCY_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_VACANCY_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_VACANCY_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_VACANCY_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_VACANCY_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_VACANCY_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default vacancies

const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userJobs = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERJOB_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERJOB_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERJOB_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERJOB_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERJOB_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERJOB_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERJOB_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERJOB_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERJOB_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERJOB_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERJOB_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERJOB_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERJOB_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERJOB_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERJOB_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userJobs

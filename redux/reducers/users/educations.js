const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userEducations = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USEREDUCATION_PENDING":
			return { ...state, isLoading: true }

		case "GET_USEREDUCATION_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USEREDUCATION_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USEREDUCATION_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USEREDUCATION_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USEREDUCATION_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USEREDUCATION_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USEREDUCATION_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USEREDUCATION_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USEREDUCATION_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USEREDUCATION_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USEREDUCATION_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USEREDUCATION_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USEREDUCATION_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USEREDUCATION_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userEducations

const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USER_PENDING":
			return { ...state, isLoading: true }

		case "GET_USER_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USER_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USER_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USER_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USER_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_USER_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USER_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USER_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USER_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USER_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USER_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USER_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USER_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USER_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default users

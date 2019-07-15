const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userSocials = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERSOCIAL_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERSOCIAL_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERSOCIAL_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERSOCIAL_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERSOCIAL_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERSOCIAL_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERSOCIAL_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERSOCIAL_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERSOCIAL_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERSOCIAL_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERSOCIAL_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERSOCIAL_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERSOCIAL_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERSOCIAL_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERSOCIAL_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userSocials

const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userLanguages = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERLANGUAGE_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERLANGUAGE_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERLANGUAGE_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERLANGUAGE_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERLANGUAGE_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERLANGUAGE_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERLANGUAGE_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERLANGUAGE_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERLANGUAGE_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERLANGUAGE_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERLANGUAGE_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERLANGUAGE_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERLANGUAGE_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERLANGUAGE_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERLANGUAGE_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userLanguages

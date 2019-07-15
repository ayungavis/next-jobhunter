const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userSkills = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERSKILL_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERSKILL_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERSKILL_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERSKILL_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERSKILL_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERSKILL_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERSKILL_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERSKILL_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERSKILL_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERSKILL_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERSKILL_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERSKILL_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERSKILL_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERSKILL_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERSKILL_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userSkills

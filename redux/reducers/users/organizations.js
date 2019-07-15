const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userOrganizations = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERORGANIZATION_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERORGANIZATION_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERORGANIZATION_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERORGANIZATION_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERORGANIZATION_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERORGANIZATION_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERORGANIZATION_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERORGANIZATION_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERORGANIZATION_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERORGANIZATION_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERORGANIZATION_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERORGANIZATION_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERORGANIZATION_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERORGANIZATION_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERORGANIZATION_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userOrganizations

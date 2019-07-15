const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userProjects = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERPROJECT_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERPROJECT_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERPROJECT_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERPROJECT_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERPROJECT_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERPROJECT_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERPROJECT_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERPROJECT_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERPROJECT_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERPROJECT_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERPROJECT_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERPROJECT_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERPROJECT_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERPROJECT_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERPROJECT_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userProjects

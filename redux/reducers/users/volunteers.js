const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userVolunteers = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERVOLUNTEER_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERVOLUNTEER_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERVOLUNTEER_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERVOLUNTEER_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERVOLUNTEER_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERVOLUNTEER_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERVOLUNTEER_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERVOLUNTEER_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERVOLUNTEER_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERVOLUNTEER_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERVOLUNTEER_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERVOLUNTEER_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERVOLUNTEER_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERVOLUNTEER_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERVOLUNTEER_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userVolunteers

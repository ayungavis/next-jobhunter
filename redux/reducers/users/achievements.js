const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const userAchievements = (state = initialState, action) => {
	switch (action.type) {
		case "GET_USERACHIEVEMENT_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERACHIEVEMENT_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERACHIEVEMENT_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_USERACHIEVEMENT_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_USERACHIEVEMENT_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_USERACHIEVEMENT_INFO_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "CREATE_USERACHIEVEMENT_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_USERACHIEVEMENT_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_USERACHIEVEMENT_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_USERACHIEVEMENT_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_USERACHIEVEMENT_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_USERACHIEVEMENT_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_USERACHIEVEMENT_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_USERACHIEVEMENT_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_USERACHIEVEMENT_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default userAchievements

import { combineReducers } from "redux"

import auth from "./auth"
import vacancies from "./vacancies"
import users from "./users"

const appReducer = combineReducers({
	auth,
	vacancies,
	users
})

export default appReducer

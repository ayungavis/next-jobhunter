import { combineReducers } from "redux"

import auth from "./auth"
import vacancies from "./vacancies"
import users from "./users"
import userAchievements from "./users/achievements"
import userEducations from "./users/educations"
import userJobs from "./users/jobs"
import userLanguages from "./users/languages"
import userOrganizations from "./users/organizations"
import userProjects from "./users/projects"
import userSocials from "./users/socials"
import userVolunteers from "./users/volunteers"
import userSkills from "./users/skills"

const appReducer = combineReducers({
	auth,
	vacancies,
	users,
	userAchievements,
	userEducations,
	userJobs,
	userLanguages,
	userOrganizations,
	userProjects,
	userSocials,
	userVolunteers,
	userSkills
})

export default appReducer

import {
	REQUEST_PROFILE_DETAIL,
	REQUEST_PROFILE_DETAIL_SUCCESS,
	REQUEST_CANDIDATE_DETAIL_SUCCESS,
	UPDATE_EDUCATION_LIST_CANDIDATE,
	UPDATE_EXPERIENCE_LIST_CANDIDATE,
	UPDATE_PROJECT_LIST_CANDIDATE,
	UPDATE_SKILL_LIST_CANDIDATE,
	UPDATE_PROFILE_CANDIDATE,
	UPDATE_INTEREST_CANDIDATE,
	UPDATE_LOOKING_CANDIDATE,
	UPDATE_SUMMARY_CANDIDATE,
	UPDATE_COVER_LETTER_CANDIDATE,
	UPDATE_CV_CANDIDATE,
	UPDATE_AVATAR_CANDIDATE,
	LOOKING_STATUS_CANDIDATE,
	UPDATE_AVATAR_EMPLOYER
} from "./types"

export const requestProfile = onSuccess => ({
	type: REQUEST_PROFILE_DETAIL,
	onSuccess
})

export const requestProfileSuccess = ({ data }) => {
	return {
		type: REQUEST_PROFILE_DETAIL_SUCCESS,
		payload: { profile: data }
	}
}

export const requestCandidateDetailSuccess = ({ data }) => {
	return {
		type: REQUEST_CANDIDATE_DETAIL_SUCCESS,
		payload: { candidate_detail: data }
	}
}

export const updateEducationListCandidate = ({ data }) => {
	return {
		type: UPDATE_EDUCATION_LIST_CANDIDATE,
		payload: { education: data }
	}
}

export const updateExperienceListCandidate = ({ data }) => {
	return {
		type: UPDATE_EXPERIENCE_LIST_CANDIDATE,
		payload: { work_experience: data }
	}
}

export const updateProjectListCandidate = ({ data }) => {
	return {
		type: UPDATE_PROJECT_LIST_CANDIDATE,
		payload: { project: data }
	}
}

export const updateSkillListCandidate = ({ data }) => {
	return {
		type: UPDATE_SKILL_LIST_CANDIDATE,
		payload: { skills: data.candidate.skill }
	}
}

export const updateProfileCandidate = ({ data }) => {
	return {
		type: UPDATE_PROFILE_CANDIDATE,
		payload: { profiles: data.candidate.date_of_birth }
	}
}

export const updateInterestCandidate = ({ data }) => {
	return {
		type: UPDATE_INTEREST_CANDIDATE,
		payload: { interestCandidate: data.candidate.interest }
	}
}

export const updateLookingforCandidate = ({ data }) => {
	return {
		type: UPDATE_LOOKING_CANDIDATE,
		payload: { lookingCandidate: data.candidate.looking_for }
	}
}

export const updateSummaryCandidate = ({ data }) => {
	return {
		type: UPDATE_SUMMARY_CANDIDATE,
		payload: { summaryCandidate: data.candidate.summary }
	}
}

export const updateCoverLetterCandidate = ({ data }) => {
	return {
		type: UPDATE_COVER_LETTER_CANDIDATE,
		payload: { coverLetter: data.candidate.cover_letter }
	}
}

export const updateCvCandidate = ({ data }) => {
	return {
		type: UPDATE_CV_CANDIDATE,
		payload: { cv: data.candidate.curriculum_vitae }
	}
}

export const updateAvatarCandidate = ({ data }) => {
	return {
		type: UPDATE_AVATAR_CANDIDATE,
		payload: { avatarCandidate: data.candidate.avatar }
	}
}

export const updateLookingStatusCandidate = ({ data }) => {
	return {
		type: LOOKING_STATUS_CANDIDATE,
		payload: { statusCandidate: data.candidate.looking_for_status }
	}
}

export const updateAvatarEmployer = ({ data }) => {
	return {
		type: UPDATE_AVATAR_EMPLOYER,
		payload: { avatarEmployer: data.employer.avatar }
	}
}
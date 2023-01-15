import { createSlice } from '@reduxjs/toolkit'

/** create reducer */
export const questionReducer = createSlice({
	name: 'questions',
	initialState: {
		queue: [],
		answers: [],
		trace: 0,
	},
	reducers: {
		startExamAction: (state, action) => {
			return {
				...state,
				queue: action.payload,
			}
		},
		movePrevAction: (state) => {
			return {
				...state,
				trace: state.trace - 1,
			}
		},
		moveNextAction: (state) => {
			return {
				...state,
				trace: state.trace + 1,
			}
		},
		resetAllAction: () => {
			return {
				queue: [],
				answers: [],
				trace: 0,
			}
		},
	},
})

export const { startExamAction, movePrevAction, moveNextAction, resetAllAction } = questionReducer.actions

export default questionReducer.reducer

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getServerData } from '../helper/helper.js'

/** redux actions */
import * as Action from '../redux/question_reducer'

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
	const dispatch = useDispatch()
	const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null })

	// console.log(`SERVER    ${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`)

	useEffect(() => {
		setGetData((prev) => ({ ...prev, isLoading: true }))

		/** async function fetch backend data */
		;(async () => {
			try {
				const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)

				if (questions.length > 0) {
					setGetData((prev) => ({ ...prev, isLoading: false }))
					setGetData((prev) => ({ ...prev, apiData: questions }))

					/** dispatch an action */
					dispatch(Action.startExamAction({ question: questions, answers }))
				} else {
					throw new Error('No Question Avalibale')
				}
			} catch (error) {
				setGetData((prev) => ({ ...prev, isLoading: false }))
				setGetData((prev) => ({ ...prev, serverError: error }))
			}
		})()
	}, [dispatch])

	return [getData, setGetData]
}

/** useDispatch can only be used inside a hook, not a function */

/** MoveAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
	try {
		dispatch(Action.movePrevAction()) /** decrease by 1 */
	} catch (error) {
		log(error)
	}
}

export const MoveNextQuestion = () => async (dispatch) => {
	try {
		dispatch(Action.moveNextAction()) /** increase by 1 */
	} catch (error) {
		log(error)
	}
}

import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
	try {
		await dispatch(Action.pushResultAction(result))
	} catch (error) {
		log(error)
	}
}

export const updateResult = (index) => async (dispatch) => {
	try {
		dispatch(Action.updateResultAction(index))
	} catch (error) {
		console.log(error)
	}
}

/** Insert User Data */
export const usePublishedResults = (resultData) => {
	const { result, username } = resultData
	;(async () => {
		try {
			if (result !== [] && !username) throw new Error("Couldn't get result")

			await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/results`, resultData, (data) => data)
		} catch (err) {
			console.log(err)
		}
	})()
}

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

export function attempts_Number(result) {
	return result.filter((r) => r !== undefined).length
}

export function earnedPoints_Number(result, answers, points) {
	return (
		result
			//　return true for correct answers
			.map((elem, i) => answers[i] === elem)
			.filter((i) => i)
			.map((i) => points)
			.reduce((prev, curr) => prev + curr, 0)
	)
}

export function flagResult(totalPoints, earnedPoints) {
	// 50% pass mark
	return (totalPoints * 50) / 100 < earnedPoints
}

/** Check user auth */
export function CheckUserExists({ children }) {
	const auth = useSelector((state) => state.result.userId)
	return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/* Get server data */
export async function getServerData(url, cb) {
	const data = await (await axios.get(url))?.data
	return cb ? cb(data) : data
}

/* Post server data */
export async function postServerData(url, result, cb) {
	const data = await (await axios.post(url, result))?.data
	return cb ? cb(data) : data
}

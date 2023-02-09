/** Get All Questions */

import Questions from '../models/questionSchema.js'
import Results from '../models/resultSchema.js'
import questions, { answers } from '../database/data.js'

export async function getQuestions(req, res) {
	try {
		const q = await Questions.find()
		res.json(q)
	} catch (err) {
		res.json({ err })
	}
}

/** Insert All Questions */
export async function insertQuestions(req, res) {
	try {
		Questions.insertMany({ questions, answers }, (err, data) => {
			res.json({ msg: 'Data saved' })
		})
	} catch (err) {
		res.json({ err })
	}
}

/** Delete All Questions */
export async function deleteQuestions(req, res) {
	try {
		await Questions.deleteMany()
		res.json({ msg: 'Questions deleted' })
	} catch (err) {
		res.json({ err })
	}
}

export async function getResults(req, res) {
	try {
		const r = await Results.find()
		res.json(r)
	} catch (err) {
		res.json({ err })
	}
}

export async function storeResults(req, res) {
	try {
		const { username, result, attempts, points, achieved } = req.body
		if (!username && !result) throw new Error('data not provided')

		Results.create({ username, result, attempts, points, achieved }, (err, data) => {
			res.json({ msg: 'Result saved' })
		})
	} catch (err) {
		res.json({ err })
	}
}

export async function deleteResults(req, res) {
	try {
		await Results.deleteMany()
		res.json({ msg: 'Delete all results' })
	} catch (err) {
		res.json({ err })
	}
}

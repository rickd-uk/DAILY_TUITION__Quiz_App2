import { Router } from 'express'
const router = Router()

import * as controller from '../controllers/controller.js'

/** Questions Routes */
// prettier-ignore
router.route('/questions')
	.get(controller.getQuestions)
	.post(controller.insertQuestions)
	.delete(controller.deleteQuestions)

// prettier-ignore
router.route('/results')
	.get(controller.getResults)
	.post(controller.storeResults)
	.delete(controller.deleteResults)

export default router

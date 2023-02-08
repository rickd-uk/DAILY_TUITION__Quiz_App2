import { Router } from 'express'

const router = Router()

/** Questions Routes */
router.get('/questions', (req, res) => {
	res.json('questions api get')
})

export default router

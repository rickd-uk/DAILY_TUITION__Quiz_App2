import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'

const app = express()

/** Middleware */
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()

/** Routes */
app.use('/api', router)

app.get('/', (req, res) => {
	try {
		res.json('Get')
	} catch (err) {
		res.json(err)
	}
})

const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
	console.log(`Server connected to http://localhost:${PORT}`)
})
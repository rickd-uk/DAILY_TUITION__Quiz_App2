import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'

import connect from './database/con.js'

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

/** Start to server ONLY on valid DB connection */
/** DB Connection  */
connect()
	.then(() => {
		try {
			app.listen(PORT, () => {
				console.log(`Server connected to http://localhost:${PORT}`)
			})
		} catch (err) {
			console.log('Cannot connect to server')
		}
	})
	.catch((err) => {
		console.log('Invalid DB Connection')
	})

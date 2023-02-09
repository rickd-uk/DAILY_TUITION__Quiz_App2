import mongoose from 'mongoose'

export default async function connect() {
	mongoose.set('strictQuery', false)
	mongoose.connect(process.env.ATLAS_URI)
	console.log('DB Connected')
}

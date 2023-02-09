import mongoose from 'mongoose'
const { Schema } = mongoose

/* Question Model */
const questionModel = new Schema({
	question: { type: Array, default: [] },
	answers: { type: Array, default: [] },
	createdAt: { type: Date, default: Date.now },
})

export const Questions = mongoose.model('Question', questionModel)

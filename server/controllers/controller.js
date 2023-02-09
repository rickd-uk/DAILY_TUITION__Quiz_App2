/** Get All Questions */
export async function getQuestions(req, res) {
	res.json('questions api get')
}

/** Insert All Questions */
export async function insertQuestions(req, res) {
	res.json('questions post req')
}

/** Delete All Questions */
export async function deleteQuestions(req, res) {
	res.json('questions delete req')
}

export async function getResults(req, res) {
	res.json('get all results')
}

export async function storeResults(req, res) {
	res.json('post results')
}

export async function deleteResults(req, res) {
	res.json('delete results')
}

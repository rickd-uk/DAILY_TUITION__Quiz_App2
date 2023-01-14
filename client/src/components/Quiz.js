import React, { useEffect } from 'react'
import log from '../utils/output.js'

import Questions from './Questions.js'

/** redux store import */
import { useSelector } from 'react-redux'

export default function Quiz() {
	const state = useSelector((state) => state)

	useEffect(() => {
		log(state)
	})

	const onNext = () => {
		// log('next')
	}
	const onPrev = () => {
		// log('previous')
	}

	return (
		<div className='container'>
			<h1 className='title text-light'>Quiz App</h1>
			{/** Display Questions */}
			<Questions />

			<div className='grid'>
				<button className='btn prev' onClick={onPrev}>
					Prev
				</button>
				<button className='btn next' onClick={onNext}>
					Next
				</button>
			</div>
		</div>
	)
}

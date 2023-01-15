import React, { useEffect, useState } from 'react'
import log from '../utils/output.js'

import Questions from './Questions.js'
import { MovePrevQuestion, MoveNextQuestion } from '../hooks/FetchQuestion.js'
import { PushAnswer } from '../hooks/SetResult'

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'

export default function Quiz() {
	const [check, setChecked] = useState(undefined)
	const [disabledBtn, setDisabledBtn] = useState(false)

	const state = useSelector((state) => state)
	const { queue, trace } = useSelector((state) => state.questions)

	const dispatch = useDispatch()

	useEffect(() => {
		log(state)
		trace == 0 && setDisabledBtn(true)
	})

	const onPrev = () => {
		trace > 0 && dispatch(MovePrevQuestion())
	}
	const onNext = () => {
		/** update trace value by 1 using  moveNextAction*/
		if (trace < queue.length) {
			dispatch(MoveNextQuestion())

			dispatch(PushAnswer(check))
		}
	}

	const onChecked = (num) => {
		console.log(num)
		setChecked(num)
	}

	return (
		<div className='container'>
			<h1 className='title text-light'>Quiz App</h1>
			{/** Display Questions */}
			<Questions onChecked={onChecked} />

			<div className='grid'>
				<button className={`btn ${trace == 0 ? 'disabled' : 'prev'}`} onClick={onPrev} disabled={!disabledBtn}>
					Prev
				</button>
				<button className='btn next' onClick={onNext}>
					Next
				</button>
			</div>
		</div>
	)
}

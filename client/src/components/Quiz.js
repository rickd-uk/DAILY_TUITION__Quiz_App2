import React, { useEffect, useState } from 'react'
import log from '../utils/output.js'

import Questions from './Questions.js'
import { MovePrevQuestion, MoveNextQuestion } from '../hooks/FetchQuestion.js'
import { PushAnswer } from '../hooks/SetResult'

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {
	const [check, setChecked] = useState(undefined)
	const [disabledBtn, setDisabledBtn] = useState(false)

	const result = useSelector((state) => state.result.result)
	const { queue, trace } = useSelector((state) => state.questions)

	const dispatch = useDispatch()

	useEffect(() => {
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

	/** Exam finishes after last question */
	if (result.length && result.length >= queue.length) {
		return <Navigate to={'/result'} replace={true} />
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

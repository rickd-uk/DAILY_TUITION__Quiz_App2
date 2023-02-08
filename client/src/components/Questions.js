import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/** Custom Hooks */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/SetResult'

export default function Questions({ onChecked }) {
	const [checked, setChecked] = useState(undefined)
	const { trace } = useSelector((state) => state.questions)
	const [{ isLoading, apiData, serverError }] = useFetchQuestion()

	const questions = useSelector((state) => state.questions.queue[state.questions.trace])
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(updateResult({ trace, checked }))
	}, [checked])

	function onSelect(num) {
		onChecked(num)
		setChecked(num)
		dispatch(updateResult({ trace, checked }))
	}

	if (isLoading) return <h3 className='text-light'>isLoading</h3>
	if (serverError) return <h3 className='text-light'>{serverError || 'Unknown Error'}</h3>

	return (
		<div className='questions'>
			<h2 className='text-light'>{questions?.question}</h2>

			<ul key={questions?.id}>
				{questions?.options.map((q, idx) => (
					<li key={idx}>
						<input type='radio' value={false} name='options' id={`q${idx}-option`} onChange={() => onSelect(idx)} />

						<label className='text-primary' htmlFor={`q${idx}-option`}>
							{q}
						</label>
						<div className='check'></div>
					</li>
				))}
			</ul>
		</div>
	)
}

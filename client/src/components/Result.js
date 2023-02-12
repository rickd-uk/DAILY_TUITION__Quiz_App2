import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'

import { attempts_Number, earnedPoints_Number, flagResult } from '../helper/helper'

import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'

/** import actions */
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { usePublishedResults } from '../hooks/SetResult'

export default function Result() {
	const dispatch = useDispatch()
	const {
		questions: { queue, answers },
		result: { result, userId },
	} = useSelector((state) => state)

	const totalPoints = queue.length * 10
	const attempts = attempts_Number(result)
	const earnedPoints = earnedPoints_Number(result, answers, 10)
	const flag = flagResult(totalPoints, earnedPoints)

	/** Store User Results */
	usePublishedResults({ result, username: userId, attempts, points: earnedPoints, achieved: flag ? 'Passed' : 'Failed' })

	const onRestart = () => {
		dispatch(resetAllAction())
		dispatch(resetResultAction())
	}

	return (
		<div className='container'>
			<h1 className='title text-light'>Quiz App</h1>

			<div className='result flex-center'>
				<div className='flex'>
					<span>Username</span>
					<span className='bold'>{userId}</span>
				</div>
				<div className='flex'>
					<span>Quiz Points: </span>
					<span className='bold'>{totalPoints || 0}</span>
				</div>
				<div className='flex'>
					<span>Total Questions</span>
					<span className='bold'>{queue.length || 0}</span>
				</div>
				<div className='flex'>
					<span>Attempts</span>
					<span className='bold'>{attempts || 0}</span>
				</div>
				<div className='flex'>
					<span>Total Points Earned</span>
					<span className='bold'>{earnedPoints || 0}</span>
				</div>
				<div className='flex'>
					<span>Quiz Result</span>
					<span style={{ color: `${flag ? '#2aff95' : '#ff2a66'}` }} className='bold'>
						{flag ? 'Passed' : 'Not Passed'}
					</span>
				</div>
			</div>
			<div className='start'>
				<Link className='btn' to={'/'} onClick={onRestart}>
					Restart
				</Link>
			</div>

			<div className='container'>
				<ResultTable />
			</div>
		</div>
	)
}

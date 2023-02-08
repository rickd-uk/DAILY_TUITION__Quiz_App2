import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'

import '../styles/Main.css'

export default function Main() {
	const usernameInputRef = useRef(null)
	const dispatch = useDispatch()

	const startQuiz = () => {
		const userInputValue = usernameInputRef.current?.value
		if (userInputValue) {
			dispatch(setUserId(userInputValue))
		}
	}

	return (
		<div className='container'>
			<h1 className='title text-light'> Quiz App</h1>
			<ol>
				<li>You will be asked 10 questions</li>
				<li>10 points will be given for each correct answer</li>
				<li>Each question has 3 options. You can only choose 1</li>
				<li>You can view and change previous answers</li>
				<li>You will get the result when you complete the quiz</li>
			</ol>

			<form id='form'>
				<input ref={usernameInputRef} className='userid' type='text' placeholder='Username' />
			</form>

			<div className='start'>
				<Link onClick={startQuiz} className='btn' to={'quiz'}>
					Start
				</Link>
			</div>
		</div>
	)
}

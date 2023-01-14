import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Main.css'

export default function Main() {
	const inputRef = useRef(null)

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
				<input ref={inputRef} className='userid' type='text' placeholder='Username' />
			</form>

			<div className='start'>
				<Link className='btn' to={'quiz'}>
					Start
				</Link>
			</div>
		</div>
	)
}

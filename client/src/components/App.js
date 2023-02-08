import '../styles/App.css'

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** Import Components */
import Main from './Main'
import Quiz from './Quiz'
import Result from './Result'
import { CheckUserExists } from '../helper/helper'

/** React Routes */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
	},
	{
		path: '/quiz',
		element: (
			<CheckUserExists>
				<Quiz />
			</CheckUserExists>
		),
	},
	{
		path: '/result',
		element: (
			<CheckUserExists>
				<Result />
			</CheckUserExists>
		),
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App

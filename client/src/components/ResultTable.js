import React, { useRef, useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

export default function ResultTable() {
	const [data, setData] = useState([])

	useEffect(() => {
		getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/results`, (res) => {
			setData(res)
		})
	}, [])
	return (
		<div>
			<table>
				<thead className='table-header'>
					<tr className='table-row'>
						<td>Name</td>
						<td>Attempts</td>
						<td>Earned Points</td>
						<td>Result</td>
					</tr>
				</thead>
				<tbody>
					{!data ?? <div>No Data Found!</div>}
					{data.map((v, i) => (
						<tr key={i} className='table-body'>
							<td>{v?.username || ''}</td>
							<td>{v?.attempts || 0}</td>
							<td>{v?.points || 0}</td>
							<td>{v?.achieved || ''}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

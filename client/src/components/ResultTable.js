import React from 'react'

export default function ResultTable() {
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
					<tr className='table-body'>
						<td>Firefly</td>
						<td>3</td>
						<td>30</td>
						<td>Passed</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

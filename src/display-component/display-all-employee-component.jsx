import React, { Fragment, Component } from 'react';
import './display-all-emp.css';

export default class DisplayComponent extends Component {
	getPersonalInfo(empInfo) {
		this.props.fetchPersonalInfo(empInfo);
		this.props.back();
	}

	render() {
		return (
			<Fragment>
				<table>
					<thead>
						<tr>
							<th scope="col">Employee Id</th>
							<th scope="col">Name</th>
							<th scope="col">Salary</th>
						</tr>
					</thead>
					<tbody>
						{this.props.empData.map((emp) => (
							<tr key={emp.id} onClick={() => this.getPersonalInfo(emp)}>
								<td>{emp.id}</td>
								<td>{emp.name}</td>
								<td>{emp.website}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Fragment>
		);
	}
}

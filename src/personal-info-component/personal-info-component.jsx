import React, { Component } from 'react';

export function PersonalInfo (props) {
/* 	constructor(props) {
		super(props);
		this.state = {
			information: this.props.emp
		};
	} */

	//render() {
		const { id, email, phone, name, website, address } =props.emp;
		return (
			<div className="personal-info">
				<button onClick={props.back} className="back-btn">
					Show All Employees
				</button>
				<br />
				<p>Planning to show personal information here</p>
				<table>
					<thead>
						<tr>
							<th scope="col">Field</th>
							<th scope="col">Data</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Employee ID</td>
							<td>{id}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{email}</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td>{phone}</td>
						</tr>
						<tr>
							<td>User Name</td>
							<td>{name}</td>
						</tr>
						<tr>
							<td>Website</td>
							<td>{website}</td>
						</tr>
                        <tr>
							<td>Address</td>
							<td>{`${address.street}, ${address.suite}, ${address.city}`}</td>
						</tr>
                        <tr>
							<td>User Name</td>
							<td>{name}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
//}

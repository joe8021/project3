import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			first: '',
			last: '',
			age: '',
			weight: '',
			height: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			email: this.state.email,
			password: this.state.password,
			first: this.state.first,
			last: this.state.last,
			age: this.state.age,
			weight: this.state.weight,
			height: this.state.height
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('email already in use')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<div className="SignupForm">
				<h4>Sign up</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="email">Email</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="email"
								id="email"
								name="email"
								placeholder="jon@doe.com"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="first">First</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="first"
								name="first"
								placeholder="first name"
								value={this.state.first}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="last">Last</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="last"
								name="last"
								placeholder="last name"
								value={this.state.last}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="confirm password"
								type="confirmPassword"
								name="confirmPassword"
								value={this.state.confirmPassword}
								onChange={this.handleChange}
							/>
						</div>
					</div>	
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="age">Age </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="22"
								type="number"
								name="age"
								value={this.state.age}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="weight">Weight </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="180"
								type="number"
								name="weight"
								value={this.state.weight}
								onChange={this.handleChange}
							/>
						</div>
					</div>	
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="height">Height </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="72"
								type="number"
								name="height"
								value={this.state.height}
								onChange={this.handleChange}
							/>
						</div>
					</div>		
					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup

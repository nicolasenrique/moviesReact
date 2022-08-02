import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
	const history = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const regexEmail =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email === '' || password === '') {
			swAlert(<h2>Please fill in all fields</h2>);
			return;
		}

		if (email !== '' && !regexEmail.test(email)) {
			swAlert(<h2>Please enter a valid email</h2>);
			return;
		}

		if (email !== 'challenge@alkemy.org' || password !== 'react') {
			swAlert(<h2>Invalid email or password</h2>);
			return;
		}
		console.log('Ok to log');
		axios
			.post('https://challenge-react.alkemy.org', { email, password })
			.then((res) => {
				swAlert(<h2>Success</h2>);
				const token = res.data.token;
				sessionStorage.setItem('token', token);
				history('/list');
			});
	};

	let token = sessionStorage.getItem('token');

	return (
		<div>
		{ token && <Navigate replace to="/list" /> }
			<div className="row">
				<div className="col-6 offset-3">
					<h2>Login Form</h2>
					<form onSubmit={submitHandler}>
						<label className="form-label d-block mt-2">
							<span>Email:</span>
							<br />
							<input type="text" name="email" className="form-control"></input>
						</label>
						<br />
						<label className="form-label d-block mt-2">
							<span>Password:</span>
							<br />
							<input
								type="password"
								name="password"
								className="form-control"
							></input>
						</label>
						<br />
						<button type="submit" className="btn btn-success mt-2">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

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
			.post('http://challenge-react.alkemy.org', { email, password })
			.then((res) => {
				swAlert(<h2>Success</h2>);
				const token = res.data.token;
				localStorage.setItem('token', token);
				history('/list');
			});
	};

	return (
		<div>
			<h2>Login Form</h2>
			<form onSubmit={submitHandler}>
				<label>
					<span>Email:</span>
					<br />
					<input type="test" name="email"></input>
				</label>
				<br />
				<label>
					<span>Password:</span>
					<br />
					<input type="password" name="password"></input>
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;

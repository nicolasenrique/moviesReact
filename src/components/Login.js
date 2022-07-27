import React from 'react';
import axios from 'axios';

const Login = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const regexEmail =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email === '' || password === '') {
			alert('Please fill in all fields');
			return;
		}

		if (email !== '' && !regexEmail.test(email)) {
			alert('Please enter a valid email');
			return;
		}

		if (email !== 'challenge@alkemy.org' || password !== 'react') {
			alert('Invalid email or password');
			return;
		}
		console.log('Ok to log');
		axios
			.post('http://challenge-react.alkemy.org', { email, password })
			.then((res) => {
				console.log(res.data);
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

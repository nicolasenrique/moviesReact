import React from 'react';

const Login = () => {
	return (
		<div>
			<h2>Login Form</h2>
			<form>
				<label>
					<span>Email:</span>
					<br />
					<input type="email" name="email"></input>
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

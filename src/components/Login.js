import React from 'react';

const Login = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const regexEmail =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

		
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
        console.log('Ok to log')
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

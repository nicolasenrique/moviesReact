import React from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const List = () => {
	let token = localStorage.getItem('token');

	return (
		<div>
			{!token && <Navigate replace to="/" />}
			<div className="row">
				<div className="col-3">
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Movie title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="/" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;

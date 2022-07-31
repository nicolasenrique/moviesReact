import React from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

const List = () => {
	let token = sessionStorage.getItem('token');

	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		const endPoint =
			'https://api.themoviedb.org/3/discover/movie?api_key=3b5441eed5f848d32e3e65ea26407c14&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
		axios
			.get(endPoint)
			.then((response) => {
				const apiData = response.data;
				setMoviesList(apiData.results);
			})
			.catch(error => {
				swAlert(<h2>Error happened, try again later</h2>);
			});
	}, [setMoviesList]);

	console.log(moviesList);

	return (
		<div>
			{!token && <Navigate replace to="/" />}
			<div className="row">
				{moviesList.map((oneMovie, idx) => {
					return (
						<div className="col-sm-12 col-lg-3 d-flex align-items-stretch" key={idx}>
							<div className="card my-4">
								<img
									src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">
										{oneMovie.title.substring(0, 20)}...
									</h5>
									<p className="card-text">
										{oneMovie.overview.substring(0, 80)}...
									</p>
									<Link to={`/detail?movieId=${oneMovie.id}`} className="btn btn-primary">
										View detail
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;

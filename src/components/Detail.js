import React from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

const Detail = () => {
	let token = sessionStorage.getItem('token');

	let query = new URLSearchParams(window.location.search);
	let movieId = query.get('movieId');

	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3b5441eed5f848d32e3e65ea26407c14&language=en-US`;
		axios
			.get(endPoint)
			.then((response) => {
				const apiData = response.data;
				setMovie(apiData);
			})
			.catch((error) => {
				swAlert(<h2>Error happened, try again later</h2>);
			});
	}, [movieId]);
	return (
		<div>
			{!token && <Navigate replace to="/" />}
			{!movie && <h2>Loading...</h2>}
			{movie && (
				<div>
					<h5>Title:{movie.title}</h5>
					<div className="row">
						<div className="col-4">
							<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster" />
						</div>
						<div className="col-8">
							<h5>Release Date: {movie.release_date}</h5>
							<h5>Review</h5>
							<p>{movie.overview}</p>
							<h5>Rating:</h5>
							<p>{movie.vote_average}</p>
							<h5>Genre</h5>
							<ul>
								{movie.genres.map((genre, idx) => {
									return <li key={idx}>{genre.name}</li>;
								})}
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Detail;

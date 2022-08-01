import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

const Results = () => {
	let query = new URLSearchParams(window.location.search);
	let keyword = query.get('keyword');

	const [moviesResults, setMoviesResults] = useState([]);

	useEffect(() => {
		const endpoint = `
		https://api.themoviedb.org/3/search/movie?api_key=3b5441eed5f848d32e3e65ea26407c14&language=en-US&page=1&include_adult=false&query=${keyword}`;
		axios
			.get(endpoint)
			.then((response) => {
				const apiData = response.data;
				// if (apiData.results.length > 0) {
				// 	swAlert(<h2>Found {apiData.results.length} results</h2>);
				// 	return
				// }
				// else if (apiData.results.length === 0) {
				// 	// 	swAlert(<h2>No results found</h2>);
				// 	// 	return
				// 	// }
				setMoviesResults(apiData.results);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<>
			<h2>Results for {keyword}</h2>
			{moviesResults.length === 0 && <h3>No results found</h3>}
			<div className="row">
				{moviesResults.map((oneMovie, idx) => {
					return (
						<div
							className="col-sm-12 col-lg-3 d-flex align-items-stretch"
							key={idx}
						>
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
										{oneMovie.overview.substring(0, 100)}...
									</p>
									{/* <Link to={`/detail?movieId=${oneMovie.id}`} className="btn btn-primary">
										View detail
									</Link> */}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Results;

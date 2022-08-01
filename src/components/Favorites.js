import React from 'react';
import { useState, useEffect } from 'react';

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const favsInLocal = localStorage.getItem('favs');
		console.log(favsInLocal);
		if (favsInLocal !== null) {
			setFavorites(JSON.parse(favsInLocal));
			console.log(favsInLocal);
		}
	}, []);

	return (
		<>
			<div>Favorites</div>
			<div className="row">
				{favorites.map((oneMovie, idx) => {
					return (
						<div
							className="col-sm-12 col-lg-3 d-flex align-items-stretch"
							key={idx}
						>
							<div className="card my-4">
								<img
									src={`https://image.tmdb.org/t/p/w500/${oneMovie.imgURL}`}
									className="card-img-top"
									alt="..."
								/>
								{/* <button
									className="favourite-btn"
									onClick={props.addOrRemoveFavourite}
									data-movie-id={oneMovie.id}
								>
									🖤
								</button> */}
								<div className="card-body">
									<h5 className="card-title">
										{oneMovie.title.substring(0, 20)}...
									</h5>
									<p className="card-text">
										{oneMovie.overview.substring(0, 80)}...
									</p>
									{/* <Link
										to={`/detail?movieId=${oneMovie.id}`}
										className="btn btn-primary"
									>
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

export default Favorites;

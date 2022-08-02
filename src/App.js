import { useState, useEffect } from 'react';

//Components

import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';
import Favorites from './components/Favorites';

//Libraries
import { Routes, Route } from 'react-router-dom';

//Styles
import './css/bootstrap.min.css';
import './css/app.css';

function App() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const favsInLocal = localStorage.getItem('favs');

		

		if (favsInLocal !== null) {
			let favsArray = JSON.parse(favsInLocal);
			setFavorites(favsArray);
		}
	}, []);

	const addOrRemoveFavourite = (e) => {

		const favMovies = localStorage.getItem('favs');
		let tempMoviesInFavs

		if (favMovies !== null) {
			tempMoviesInFavs = JSON.parse(favMovies);
		}
		else {
			tempMoviesInFavs = [];
		}


		const btn = e.currentTarget;
		const parent = btn.parentElement;
		const imgURL = parent.querySelector('img').src;
		const title = parent.querySelector('h5').innerText;
		const overview = parent.querySelector('p').innerText;
		const movieData = {
			imgURL,
			title,
			overview,
			id: btn.dataset.movieId,
		};

		let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
			return oneMovie.id === movieData.id;
		});

		if (!movieIsInArray) {
			tempMoviesInFavs.push(movieData);
			localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
			setFavorites(tempMoviesInFavs);
			console.log('added');
		} else {
			let moviesLeft = tempMoviesInFavs.filter((oneMovie) => {
				return oneMovie.id !== movieData.id;
			});
			localStorage.setItem('favs', JSON.stringify(moviesLeft));
			setFavorites(moviesLeft);
			console.log('removed');
		}
	};

	return (
		<>
			<Header favorites={favorites}/>
			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/list"
						element={<List addOrRemoveFavourite={addOrRemoveFavourite} />}
					/>
					<Route path="/detail" element={<Detail />} />
					<Route path="/results" element={<Results />} />
					<Route
						path="/favorites"
						element={<Favorites favorites={favorites} addOrRemoveFavourite={addOrRemoveFavourite}  />}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;

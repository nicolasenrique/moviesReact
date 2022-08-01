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
	const favMovies = localStorage.getItem('favs');

	let tempMoviesInFavs;

	if (favMovies) {
		tempMoviesInFavs = JSON.parse(favMovies);
	} else {
		tempMoviesInFavs = [];
	}

	const addOrRemoveFavourite = (e) => {
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
			console.log('added');
		} else {
			tempMoviesInFavs = tempMoviesInFavs.filter((oneMovie) => {
				return oneMovie.id !== movieData.id;
			});
			localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
			console.log('removed');
		}
	};

	return (
		<>
			<Header />
			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/list"
						element={<List addOrRemoveFavourite={addOrRemoveFavourite} />}/>
					<Route path="/detail" element={<Detail />} />
					<Route path="/results" element={<Results />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;

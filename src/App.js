//Components

import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

//Libraries
import { Routes, Route } from 'react-router-dom';

//Styles
import './css/bootstrap.min.css';

function App() {
	return (
		<div className="container mt-3">
			<Header />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/list" element={<List />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

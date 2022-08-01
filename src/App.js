//Components

import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';

//Libraries
import { Routes, Route } from 'react-router-dom';

//Styles
import './css/bootstrap.min.css';

function App() {
	return (
		<>
			<Header />
			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/list" element={<List />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/results" element={<Results />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;

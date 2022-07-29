//Components

import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';

//Libraries
import { Routes, Route } from 'react-router-dom';

//Styles
import './css/bootstrap.min.css';

function App() {
	return (
		<div>
			<Header />
			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/list" element={<List />} />
					<Route path="/detail" element={<Detail />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

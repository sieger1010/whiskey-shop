import React from 'react';
import AgeCheck from './components/AgeCheck';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ItemsDisplay from './components/ItemsDisplay';
import './App.css';


function App() {
	const items = require('./data/items.json'); // Simulated API call to imaginary endpoint 'get_all_products'

	return (		
		<div className="App">
			<AgeCheck />
			<div className="container-fluid p-0">
				<Navbar />
				<Landing />
				<ItemsDisplay items={items.body} responseCode={items.responseCode} />
			</div>
		</div>		
	);
}

export default App;

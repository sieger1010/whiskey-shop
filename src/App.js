import React from 'react';
import AgeCheck from './components/AgeCheck';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import './App.css';

function App() {
  
	return (
		<div className="App">
			<AgeCheck />
			<Navbar />
			<Landing />
		</div>
	);
}

export default App;

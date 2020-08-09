import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
	return (
		<Switch>
			<div>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</div>
		</Switch>
	);
}

export default App;

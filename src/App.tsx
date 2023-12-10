import React from 'react';
import './App.css';
import ListItem from "./ListItem";
import { data } from './data/LISTENING_DICTATION.json';

function App() {
	return (
		<div className="App">
			<ListItem data={data} />
		</div>
	);
}

export default App;

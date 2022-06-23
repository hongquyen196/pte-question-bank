import React from 'react';
import './App.css';
import ListItem from "./ListItem";
import LISTENING_DICTATION from './data/LISTENING_DICTATION.json'

function App() {
	return (
		<ListItem data={LISTENING_DICTATION}/>
	);
}

export default App;

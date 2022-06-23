import React from 'react';
import './App.css';
import ListItem from "./ListItem";
import LISTENING_DICTATION from './data/LISTENING_DICTATION.json'

function App() {
  return (
	  <div className="App">
	  	<ListItem data={LISTENING_DICTATION}/>
	  </div>
  );
}

export default App;

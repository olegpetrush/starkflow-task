import React from 'react';
import Nav from './components/Nav';
import Board from './components/Board';
import './App.css';

function App({ type = 0 }) {
  return (
    <div className="App">
      <h1 className="App-title">Trending</h1>
      <p>See what the Github community is most excited about today.</p>
      <div className="seperate-line" />
      <div className="App-main">
        <Nav type={type} />
        <Board type={type} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Movie Explorer</h1>
      <MovieList />
    </div>
  );
}

export default App;

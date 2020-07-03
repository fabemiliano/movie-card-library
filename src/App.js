import React, { useEffect } from 'react';
import Data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';


function App() {
  useEffect(() => {
    document.title = "Movie-Card-Library"
  }, [])
  return (
    <div className="App">
      <Header />
      <MovieList movies={Data} />
    </div>
  );
}

export default App;

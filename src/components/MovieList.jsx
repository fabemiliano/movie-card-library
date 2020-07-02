// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import '../MovieList.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="MovieList">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;

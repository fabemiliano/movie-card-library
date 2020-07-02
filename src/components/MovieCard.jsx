import React from 'react';
import Rating from './Rating';
import '../MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="MovieCard">
        <div>
          <img src={movie.imagePath} alt="foto do jogo" width="200px" />
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
        </div>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

export default MovieCard;

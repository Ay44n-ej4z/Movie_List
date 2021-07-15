import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./MovieCard.css"
export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <div className="media">
          <img className="poster" src={movie.Poster} alt="Movie Cover" />
         <div className = "text">
          <b className="title">
            {movie.Title} 
          </b>
          <span className = "subTitle"> {movie.Year}</span>
          </div>
          {/* <Link  className="btn btn-dark" to={'/movie/' + movie.imdbID}>
            Details
            <i className="fas fa-chevron-right" />
          </Link> */}
        </div>
      </div>
    );
  }
}

export default MovieCard;

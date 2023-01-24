import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
//import Buscador from "../Buscador/Buscador";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(m => (
              <div key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <span>{movie.title}</span>
                    <button onClick={()=> this.props.removeMovieFavorite(movie.id)}>X</button>
                  </Link>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesFavorites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){   //Una vez renderizado el componente se ejecuta
        const movieId = this.props.match.params.id;   //Routh--> prop-->match y params
        this.props.getMovieDetail(movieId);  // se despacha la accion
    } 


    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>
                <h2>{this.props.movie.Year}</h2>
                <h2>{this.props.movie.Rated}</h2>
                <h2>{this.props.movie.Released}</h2>
                <h2>{this.props.movie.Genre}</h2>
                <img src={this.props.movie.Poster}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.getMovieDetail
    }
}

function mapDispatchToProp(dispatch){
    return{
        getMovieDetail : movieId => dispatch(getMovieDetail(MovieID))
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Movie);
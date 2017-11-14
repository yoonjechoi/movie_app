import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <MoviePoster poster={props.poster}/>
        </div>

    );
}

Movie.propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
};

function MoviePoster(props) {
    return (
        <img src={props.poster} alt=""/>
    ); 
}

export default Movie;
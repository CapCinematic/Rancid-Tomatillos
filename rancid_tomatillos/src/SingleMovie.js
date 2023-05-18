import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



function SingleMovie(props) {
    return (
        <div>
            {props.movie.title}
            {props.movie.release_date}
            {props.movie.poster_path}
            <Link to={'/'}>
                <button>Home</button>
            </Link>

            {movie.movie.title}
            {movie.movie.release_date}
            {movie.movie.budget}
            {movie.movie.overview}
            {movie.movie.runtime}
            {movie.movie.revenue}
            {movie.movie.tagline}
            {movie.movie.genre}
            <img src= {movie.movie.poster_path} alt='Movie Poster'></img>
           {console.log(movie.movie.getMovieInfo)} 
        </div>
    )
}


export default SingleMovie;


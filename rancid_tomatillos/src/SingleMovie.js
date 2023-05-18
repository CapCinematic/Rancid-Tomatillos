import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



function SingleMovie(props) {
    return (
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            {props.movie.title}
            {props.movie.release_date}
            {props.movie.poster_path}
            {props.movie.budget}
            {props.movie.overview}
            {props.movie.runtime}
            {props.movie.revenue}
            {props.movie.tagline}
            {props.movie.genre}
            <img src= {props.movie.poster_path} alt='Movie Poster'></img>
           {console.log(props.movie.getMovieInfo)} 
        </div>
    )
}


export default SingleMovie;


import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import './SingleMovie.css'



function SingleMovie(props) {
    return (
        <div className='single-movie'>
            <Link to={'/'}>
                <button alt="home button">Home</button>
            </Link>
            <p className='single-movie-title'>
            {props.movie.title}
            <br></br>
            <br></br>
            "{props.movie.tagline}"
            <br></br>
            <br></br>
            Release Date: {props.movie.release_date}
            </p>
            <p className='single-movie-overview'>
            {props.movie.overview}
            </p>
            <p className='single-movie-info'>
            Run Time: {props.movie.runtime} Mins
            <br></br>
            <br></br>
            Budget of: ${props.movie.budget}!
            <br></br>
            <br></br>
            Bringing in a total of: ${props.movie.revenue}
            <br></br>
            <br></br>
            Genre: {props.movie.genre}
            <br></br>
            <br></br>
            </p>
            <img className='movie-img' src= {props.movie.poster_path} alt='Movie Poster'></img>
        </div>
    )
}


export default SingleMovie;


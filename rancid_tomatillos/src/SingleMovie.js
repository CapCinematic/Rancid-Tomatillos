import React from 'react';
import PropTypes from 'prop-types'



function SingleMovie({ movie }) {
    return (
        <div>
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

SingleMovie.propTypes = {
    movie: PropTypes.object
}
import React from 'react';
import './Movies.css';
import MovieCards from '../src/MovieCards';
import PropTypes from 'prop-types'


function Movies({ movies, getMovieInfo }) {
    const moviePosters = movies.map((movie) => {
        return (
            <MovieCards
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                src={movie.poster_path}
                release={movie.release_date}
                rating={movie.average_rating}
                getMovieInfo={getMovieInfo}
            />
        );
    });

    return (
        <div className='poster-grid'>
            {moviePosters}
        </div>
    )
}



export default Movies


Movies.propTypes = {
    title: PropTypes.string,
    release: PropTypes.string,
    getMovieInfo: PropTypes.func
}
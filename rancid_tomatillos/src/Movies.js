import React from 'react';
import './Movies.css';
import movieData from '../src/movieData'
import MovieCards from '../src/MovieCards'


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



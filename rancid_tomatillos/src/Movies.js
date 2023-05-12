import React from 'react';
import './Movies.css';


function Movies({ movies }) {
    const moviePosters = movies.movies.map(movie => {
        return (
            <img className='posters' key={movie.id} src={movie.poster_path} />
        )
    })

    return (
        <div className='poster-grid'>
            {moviePosters}
        </div>
    )
}








export default Movies
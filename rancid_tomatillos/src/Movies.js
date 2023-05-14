import React from 'react';
import './Movies.css';


function Movies({ movies }) {
    const movieCards = movies.movies.map(movie => {
        return (
            <div key={movie.id} className='card'>
                <a href={`/movies/${movies.id}`}>
                    <img src={movie.poster_path} alt={`Poster for ${movie.title}`} className='poster'/>
                </a>
                <div className='info'>
                    <h2 className='title'>{movie.title}</h2>
                    <p className='rating'>{movie.average_rating}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='poster-grid'>
            {movieCards}
        </div>
    )
}








export default Movies
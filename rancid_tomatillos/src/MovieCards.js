import React from 'react'

function MovieCards({ movies }) {
    const cards = movies.movies.map(movie => {
        return (
            <div>
                <aside className='movie-cards' key={movie.id}>
                    <h2>{movie.title}</h2>
                    <h3>{movie.release_date}</h3>
                    <p>{movie.overview}</p>
                    <h3>{movie.average_rating}</h3>
                    <h3>{movie.genres}</h3>
                    <h3>{movie.budget}</h3>
                    <h3>{movie.revenue}</h3>
                    <h3>{movie.runtime}</h3>
                    <h2>{movie.tagline}</h2>
                </aside>
                <img className='movie-backdrop'>
                    movie.backdrop_path
                </img>
            </div>
        )
    })

    return (
        <div>
            {cards}
        </div>
    )
}



export default MovieCards
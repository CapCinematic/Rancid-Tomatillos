import React from 'react'


const MovieCards = ({ poster, title, release, rating, id, getMovieInfo }) => {
    return (
        <div className='cards' id={id} onClick={(event) => getMovieInfo(id)}>
            <div className='movie-cards' >
                <h2>{title}</h2>
                <h3>{release}</h3>
                <h3>{rating}</h3>
            <img className='movie-backdrop' src={poster} alt=''/>

            </div>
        </div>
    )
}


export default MovieCards
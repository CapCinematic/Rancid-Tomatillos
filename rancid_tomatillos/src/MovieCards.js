import React from 'react'
import { Link } from 'react-router-dom'


const MovieCards = ({ poster, title, release, rating, id, getMovieInfo }) => {
    return (
        <Link to ={`/${id}`} key={id}  onClick={(event) => getMovieInfo(id)}>
            <div className='cards' id={id}>
                <div className='movie-cards' >
                    <h2>{title}</h2>
                    <h3>{release}</h3>
                    <h3>{rating}</h3>
                <img className='movie-backdrop' src={poster} alt=''/>
                </div>
            </div>
        </Link>
    )
}


export default MovieCards
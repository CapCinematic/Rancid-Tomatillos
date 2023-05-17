import React from 'react'


function SingleMovie({ movie }) {
    console.log('uuuugh', { movie })
    return (
        <div>
            {movie.movie.title}
            {movie.movie.release_date}
            {movie.movie.poster_path}
        </div>

    )
}





export default SingleMovie
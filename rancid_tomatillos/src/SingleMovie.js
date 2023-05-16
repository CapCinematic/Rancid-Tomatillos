import React from 'react'

function SingleMovie({ movie }) {
    console.log('uuuugh', { movie })
    return (
        <div>
            {movie.movie.title}
            {movie.movie.release_date}
        </div>

    )
}





export default SingleMovie
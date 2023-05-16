import React from 'react';
import PropTypes from 'prop-types'


function SingleMovie({ movie }) {
    return (
        <div>
            {movie.movie.title}
            {movie.movie.release_date}
        </div>
    )
}



export default SingleMovie;

SingleMovie.propTypes = {
    movie: PropTypes.object
}
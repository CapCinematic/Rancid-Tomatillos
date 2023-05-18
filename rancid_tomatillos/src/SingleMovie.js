import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



function SingleMovie(props) {
    return (
        <div>
            {props.movie.title}
            {props.movie.release_date}
            {props.movie.poster_path}
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </div>
    )
}


export default SingleMovie;


import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const MovieCards = ({ poster, title, release, rating, id, getMovieInfo }) => {
    return (
        <Link to={`/${id}`} key={id} onClick={() => getMovieInfo(id)}>
            <div className='cards' id={id}>
                <div className='movie-cards' >
                    <h2>{title}</h2>
                    {/* <h3>{release}</h3> */}
                    <h3>Rating: {rating}</h3>
                    <img className='movie-backdrop' src={poster} alt='' />
                </div>
            </div>
        </Link>
    )
}


export default MovieCards

MovieCards.propTypes = {
    title: PropTypes.string,
    release: PropTypes.string,
    rating: PropTypes.number,
    getMovieInfo: PropTypes.func

}
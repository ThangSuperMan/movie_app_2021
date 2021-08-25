import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/Movie.css';

const Movie = ({id, title , year, genres, summary, poster}) => {
    return (
        <>
            <div className="movies__movie">
                <div className="movie__image">
                    <img src={poster} alt={title} title={title}/>
                </div>
                <div className="movie__content">
                    <h1 className="movie__title">{title}</h1>
                    <span className="movie__year">{year}</span>
                    <ul className="movie__list-genres">
                        { genres.map(genre => <li>{genre}</li>) }
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)} ...</p>
                </div>
            </div>
        </>
    )
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    // poster -> medium_cover_image
    poster: PropTypes.string.isRequired,
}

export default Movie;


import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
    console.log(movies)
    const renderMovies = Object.keys(movies).map((movieID, index) =>{
        return (
            <li key={index}>
                <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
            </li>
        )
    })
    return (
        <ul>
            {renderMovies}
        </ul>
    );
}

export default MoviesList;

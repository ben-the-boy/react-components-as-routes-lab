import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieDivs = movies.map(movie => {
    return <div>
      <h3>Name: {movie.title}</h3>
      Time: {movie.time}
      <br/>
      <br/>
      Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
    </div>
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
};

export default Movies;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../utils/utilities';
import './style.css';
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      const moviesdetails = await getMovieDetails(movieId);
      setMovie(moviesdetails);
    })();
  }, [movieId]);
  if (!movie) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="movie-details">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    
    </div>
  );
};
export default MovieDetails;
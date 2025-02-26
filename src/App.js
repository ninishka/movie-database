import React, { useState, useEffect } from 'react';
import axios from './axios'; // Import the Axios instance

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch popular movies
    const fetchMovies = async () => {
      const response = await axios.get(`/movie/popular?api_key=50be6e09cf08397cf3a4d661105735ad`);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    const response = await axios.get(`/search/movie?api_key=50be6e09cf08397cf3a4d661105735ad&query=${search}`);
    setMovies(response.data.results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieApp;

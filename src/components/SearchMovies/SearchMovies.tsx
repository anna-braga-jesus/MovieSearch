import { Form } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../SearchMovies/SearchResults';

export interface Movie {
  Title: string;
  id: number;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const SearchMovies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=6fb4c6a`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
        setErrorMessage('');
        const searchMoviesAction = { type: 'SEARCH_MOVIES_SUCCESS', payload: data.Search };
        dispatch(searchMoviesAction);
      } else {
        setMovies([]);
        setErrorMessage(data.Error);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setMovies([]);
    setErrorMessage('');
  };

  return (
    <div>
      <Form onSubmit={handleSearchMovies}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
        <button type="reset" className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </Form>
      {errorMessage && <div>{errorMessage}</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default SearchMovies;

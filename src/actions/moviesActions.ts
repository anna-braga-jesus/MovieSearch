import { Dispatch } from 'redux';
import { Movie } from '../components/SearchMovies/SearchMovies';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export interface SearchMoviesPayload {
    searchTerm: string;
    movies: Movie[];
  }

  export const searchMovies = (searchTerm: string) => async (dispatch: Dispatch) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=6fb4c6a`;
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.Response === 'True') {
        const payload: SearchMoviesPayload = {
          searchTerm,
          movies: data.Search,
        };
        dispatch({ type: SEARCH_MOVIES, payload });
      } else {
        const payload: SearchMoviesPayload = {
          searchTerm,
          movies: [],
        };
        dispatch({ type: SEARCH_MOVIES, payload });
      }
    } catch (error) {
      const payload: SearchMoviesPayload = {
        searchTerm,
        movies: [],
      };
      dispatch({ type: SEARCH_MOVIES, payload });
    }
  };
  
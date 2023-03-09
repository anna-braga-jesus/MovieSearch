import { Movie } from "../components/SearchMovies/SearchMovies";

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;

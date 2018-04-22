import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import SelectMovie from './reducer_movie_active';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectMovie: SelectMovie
});

export default rootReducer;
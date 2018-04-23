export function selectMovie(movie) {
    return {
      type: 'MOVIE_SELECTED',
      payload: movie
    };
}

export function searchMovie(movie) {
  return {
    type: 'MOVIE_SEARCH',
    payload: movie
  }
}
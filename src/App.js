import React from 'react';
import MoviesList from './containers/moviesList';
import Movie from './containers/movie';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <MoviesList />
                <Movie />
            </div>
        )
    }
}
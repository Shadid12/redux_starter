import React from 'react';
import MoviesList from './containers/moviesList';
import Movie from './containers/movie';
import Search from './containers/search';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Search />
                <MoviesList />
                <Movie />
            </div>
        )
    }
}
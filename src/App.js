import React from 'react';
import MoviesList from './containers/moviesList';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <MoviesList />
            </div>
        )
    }
}
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectMovie} from '../actions/index';

class MoviesList extends React.Component {
    render() {
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }

    renderList() {
        return this.props.movies.map((movie) => {
          return (
            <li 
                key={movie.title}
                onClick={() => this.props.selectMovie(movie)} 
            >
                {movie.title}
            </li>
          );
        });
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectMovie: selectMovie
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
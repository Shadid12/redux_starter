import React from 'react';
import { connect } from 'react-redux';

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
            <li key={movie.title} >{movie.title}</li>
          );
        });
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList)
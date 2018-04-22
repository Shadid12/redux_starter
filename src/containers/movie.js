import React from 'react';
import { connect } from 'react-redux';

class Movie extends React.Component {
    render() {
        if(!this.props.movie) {
            return(
                <div>No Movies Selected</div>
            )
        }

        return(
            <div>
                <h1>{this.props.movie.title}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie: state.selectMovie
    }
}

export default connect(mapStateToProps)(Movie);
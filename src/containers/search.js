import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {searchMovie} from '../actions/index';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: ''
        }
    }
    render() {
        return(
            <div>
                <input onChange={this.handleChange} value={this.state.filter}></input>
            </div>
        )
    }

    handleChange = (e) => {
        this.props.searchMovie(e.target.value);
        this.setState({filter: e.target.value})
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchMovie: searchMovie
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
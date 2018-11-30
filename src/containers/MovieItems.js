import React, {Component} from 'react';
import MovieItem from '../components/MovieItem';
import '../style/MovieItems.css'
import {connect} from 'react-redux';

class MovieItems extends Component {
  render() {
    const movies = this.props.movies;
    const items = movies.map(function(item, i){
      return (
        <li key={i}>
          <MovieItem title={item.title} description={item.description}/>
        </li>
      );
    });
    return (
      <ul id="movieItems">
        {items}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesPanelReducer.movies
  }
}

export default connect(mapStateToProps)(MovieItems);
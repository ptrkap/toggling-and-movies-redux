import React, {Component} from 'react';
import MovieItem from '../components/MovieItem';
import '../style/MovieItems.css'

export default class MovieItems extends Component {
  render() {
    const movies = this.props.getMovies();
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

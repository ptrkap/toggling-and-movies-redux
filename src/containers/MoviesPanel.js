import React, {Component} from 'react';
import '../style/MoviesPanel.css';
import MovieInputs from './MovieInputs';
import MovieItems from './MovieItems';

export default class MoviesPanel extends Component {
  
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  setMovies(movies) {
    this.setState({movies: movies});
  }

  getMovies() {
    return this.state.movies;
  }

  render() {
    return (   
      <div id="moviesPanel">
        <h2 id="moviesPanelTitle">Movies</h2>
        <MovieInputs
          setMovies={this.setMovies.bind(this)}
          getMovies={this.getMovies.bind(this)} />
        <MovieItems getMovies={this.getMovies.bind(this)} />
      </div>
    )  
  }
}

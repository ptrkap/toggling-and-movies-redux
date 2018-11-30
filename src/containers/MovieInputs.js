import React, {Component} from 'react';
import '../style/MovieInputs.css';

export default class MovieInputs extends Component {

  addMovie() {
    const title = document.getElementById("movieTitleInput").value;
    const description = document.getElementById("movieDescriptionInput").value;
    const movies = this.props.getMovies();
    this.props.setMovies([
      ...movies, {
        title: title,
        description: description
      }
    ]);
  }

  render() {
    return (
      <div id="movieInputs">
        <input id="movieTitleInput" placeholder="Title"></input><br />
        <textarea id="movieDescriptionInput" placeholder="Description"></textarea>
        <button id="addMovieButton" onClick={this.addMovie.bind(this)}>Add movie</button>
      </div>
    );
  }
}

import React, {Component} from 'react';
import '../style/MovieInputs.css';
import {connect} from 'react-redux';

class MovieInputs extends Component {

  addMovie() {
    const title = document.getElementById("movieTitleInput").value;
    const description = document.getElementById("movieDescriptionInput").value;
    this.props.addMovie({
        title: title,
        description: description
      }
    );
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

function mapDispatchToProps(dispatch) {
  return {
    addMovie: function(movie) {
      return dispatch({
        type: 'MOVIES_ADD_NEW',
        movie: movie
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieInputs);

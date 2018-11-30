import React from 'react';
import '../style/MoviesPanel.css';
import MovieInputs from '../containers/MovieInputs';
import MovieItems from '../containers/MovieItems';

export default () => { 
  return (   
    <div id="moviesPanel">
      <h2 id="moviesPanelTitle">Movies</h2>
      <MovieInputs />
      <MovieItems />
    </div>
  )  
}

import React, { Component } from 'react';
import TogglingPanel from './containers/TogglingPanel';
import MoviesPanel from './components/MoviesPanel';

export default class App extends Component {
  render() {
    return (
      <div>
        <TogglingPanel />
        <br />
        <MoviesPanel />
      </div>
    );
  }
}

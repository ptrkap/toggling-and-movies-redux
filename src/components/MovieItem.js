import React from 'react';
import '../style/MovieItem.css';

export default (props) => {
  return (
    <div>
      <h3 className="movieTitle">{props.title}</h3>
      <div className="movieDescription">{props.description}</div>
    </div>
  )
}

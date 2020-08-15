import React from "react";
import Poster from "./Poster";

const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Poster poster={props.poster} />
    </div>
  );
};

export default Movie;

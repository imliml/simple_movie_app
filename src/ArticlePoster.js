import React from "react";
import PropTypes from "prop-types";

const MoviePoster = ({ poster, alt }) => {
  return <img src={poster} alt={alt} title={alt} className="Article__Poster" />;
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MoviePoster;

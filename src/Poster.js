// import React from "react";

// const Poster = ({ poster }) => {
//   return <img src={poster} alt="Movie Poster" />;
// };

// export default Poster;

import React from "react";
import PropTypes from "prop-types";

const Poster = ({ poster }) => {
  return <img src={poster} alt="Movie Poster" />;
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Poster;

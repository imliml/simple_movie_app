// import React from "react";
// import Poster from "./Poster";

// const Movie = ({ title, poster }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <Poster poster={poster} />
//     </div>
//   );
// };

// export default Movie;

import React from "react";
import Poster from "./Poster";
import PropTypes from "prop-types";

const Movie = ({ title, poster }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Poster poster={poster} />
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;

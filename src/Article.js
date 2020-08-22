import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import ArticlePoster from "./ArticlePoster";

import "./Article.css";

const Article = ({ title, urlToImage, description, publishedAt }) => {
  return (
    <div className="Article">
      <div className="Article__Column">
        <ArticlePoster poster={urlToImage} alt={title} />
      </div>
      <div className="Article__Column">
        <h1>{title}</h1>
        <div className="Article__Date">
          <h5>{publishedAt}</h5>
        </div>
        <div className="Article__desc">
          <LinesEllipsis
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

export default Article;

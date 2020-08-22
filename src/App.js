import React from "react";
// import Movie from "./Movie";

import "./App.css";

class App extends React.Component {
  // 상태값 초기 선언을 해주는 위치
  state = {};

  // 라이프사이클 선언
  componentDidMount() {
    this._getArticles();
  }

  _renderArticles = () => {
    const articles = this.state.articles.map((article) => {
      return <h1>{article.title}</h1>;
    });
    return articles;
  };

  // 함수선언
  _getArticles = async () => {
    const articles = await this._callApi();
    this.setState({
      articles,
    });
  };

  _callApi = () => {
    return fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-22&sortBy=publishedAt&apiKey=68d6ee4f872c4987a48777675f4735f5"
    )
      .then((potato) => potato.json())
      .then((json) => json.articles)
      .catch((err) => console.log(err));
  };

  // return은 화면상 보여지는거
  render() {
    const { articles } = this.state;
    return (
      <div className={articles ? "App" : "App--loading"}>
        {articles ? this._renderArticles() : "Loading"}
      </div>
    );
  }
}

export default App;

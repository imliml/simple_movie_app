import React from "react";
// import Movie from "./Movie";

import "./App.css";

class App extends React.Component {
  // 상태값 초기 선언을 해주는 위치
  state = {};

  // 라이프사이클 선언
  componentDidMount() {
    this._getMovies();
  }

  // 함수선언
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-15&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f"
    )
      .then((potato) => potato.json())
      .then((json) => console.log(json.articles))
      .catch((err) => console.log(err));
  };

  // return은 화면상 보여지는거
  render() {
    return (
      <div className="App">
        <h1>sdfadasfasdfasdf</h1>
      </div>
    );
  }
}

export default App;

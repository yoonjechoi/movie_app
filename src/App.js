import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "Matrix",
    poster: "https://metrouk2.files.wordpress.com/2017/02/the-matrix.jpg?quality=80&strip=all"
  },
  {
    title: "Hunger Game",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_UY1200_CR90,0,630,1200_AL_.jpg"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  // movies: [...prevState.movies,
  //   {
  //     title: '도깨비',
  //     poster: "http://img.lifestyler.co.kr/uploads/program/cheditor/2016/12/SN9HGA4BTLTE2CD7PC4J_1024x0.jpg"
  //   }]

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState, props) => ({
        movies: [
          ...movies,
          {
            title: '도깨비',
            poster: "http://img.lifestyler.co.kr/uploads/program/cheditor/2016/12/SN9HGA4BTLTE2CD7PC4J_1024x0.jpg"
          }]
      }));
    }, 5000);
  }

  _render_movies = () => {
    const movies = this.state.movies.map((movie, index, array) => {
      return <Movie title={movie.title} poster={movie.poster} />;
    });

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._render_movies() : <h1>Loading</h1>}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }


  _getMovies = async () => {
    const movies = await this._callApi('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
    this.setState({movies});
  }

  
  _callApi = (url) => {
    return fetch(url)
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(error => console.log(error))
  }


  componentDidMount() {
    this._getMovies(); 
  }

  _render_movies = () => {
    const movies = this.state.movies.map((movie, index, array) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} genres={movie.genres} synopsis={movie.synopsis} key={movie.id} />;
    });

    return movies;
  }

  render() {
    const { movies } = this.state;
    return (
      // <div className={movies ? "App" : "App--loading"}>
      //   {movies ? this._render_movies() : 'Loading'}
      // </div>
      <div> 
        <h1> hello world</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import movieData from '../src/movieData'
import './App.css';
import Movies from '../src/Movies'
import MovieCards from '../src/MovieCards'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      singleMovie: null
    }
  }

  getMovieInfo = (id) => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}')
      .then((res) => res.json())
      .then((data) => this.setState({ singleMovie: data, allMovies: null }))
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((res) => res.json())
      .then((data) => this.setState({ allMovies: data.movies }))
  }


  render() {
    if (!this.state.singleMovie) {
      return (
        <main className='App'>
          <Movies movies={this.state.allMovies} getMovieInfo={this.getMovieInfo} />
        </main>
      )
    }
  }
}




export default App;

import React, { Component } from 'react';
import movieData from '../src/movieData'
import './App.css';
import Movies from '../src/Movies'
import MovieCards from '../src/MovieCards'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData
    }
  }

  displaySingleMovie() {
    onClick()
  }


  render() {
    return (
      <main className='App'>
        <Movies movies={this.state.allMovies} />
      </main>
    )
  }
}




export default App;

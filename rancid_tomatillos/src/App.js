import React, { Component } from 'react';
import movieData from '../src/movieData'
import './App.css';
import Movies from '../src/Movies'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData
    }
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

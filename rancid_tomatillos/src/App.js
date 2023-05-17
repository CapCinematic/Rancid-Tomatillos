import React, { Component } from 'react';
import movieData from '../src/movieData'
import './App.css';
import Movies from '../src/Movies'
import SingleMovie from '../src/SingleMovie'
import PropTypes from 'prop-types'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      singleMovie: null
    }
  }

  getMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ singleMovie: data }))
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((res) => res.json())
      .then((data) => this.setState({ allMovies: data.movies }))
  }

  displayHomePage = () => {
    this.setState({ singleMovie: null })
  }


  render() {
    if (!this.state.singleMovie) {
      return (
        <div>
          <header>
            <h1>Rancid Tomatillos</h1>
          </header>
          <main className='App'>
            <Movies movies={this.state.allMovies} getMovieInfo={this.getMovieInfo} />
          </main>
        </div>
      )
    } else {
      return (
        <div>
          <header>
            <h1>Rancid Tomatillos</h1>
            <button className='home-button' onClick={this.displayHomePage}>home</button>
          </header>
          <main className='single'>
            <SingleMovie movie={this.state.singleMovie} />
          </main>
        </div >
      )
    }
  }
}


export default App;

App.propTypes = {
  allMovies: PropTypes.array
}
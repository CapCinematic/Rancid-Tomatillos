import React, { Component } from 'react';
import movieData from '../src/movieData'
import './App.css';
import Movies from '../src/Movies'
import SingleMovie from '../src/SingleMovie'
import PropTypes from 'prop-types'
import { ReactDOM } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));

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
      .then((response) => {
        if (!response.ok) {
          throw new Error('Our bad. One moment please.')
        }
        return response.json()
      })
      .then((data) => this.setState({ singleMovie: data }))
      .catch((error) => {
        throw new Error('Issue with request.')
      })
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((res) => res.json())
      .then((data) => this.setState({ allMovies: data.movies }))
      .catch((error) => {
        throw new Error('Issue with request.')
      })
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
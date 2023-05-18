import React, { Component } from 'react';
// import movieData from '../src/movieData'
import './App.css';
// import router from '../src/index';
import Movies from '../src/Movies'
import SingleMovie from '../src/SingleMovie'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

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
            <h1>Moldy Mangos</h1>
          </header>
          <main className='App'>
            <Route path='/' render={ () => <Movies movies ={this.state.allMovies} getMovieInfo={this.getMovieInfo}/> }/>
          </main>
        </div>
      )
    } else {
      return (
        <div>
          <header>
            <h1>Moldy Mangos</h1>
            <Link to ={'/'}>
            <button className='home-button' onClick={this.displayHomePage}>home</button>
            </Link>
          </header>
          <main className='single'>
            <Route path='/:id' render={ () => <SingleMovie movie ={this.state.singleMovie}/>}/>
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
import React, { Component } from 'react';
import './App.css';

import Movies from '../src/Movies'
import SingleMovie from '../src/SingleMovie'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      singleMovie: []
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
      .then((data) =>
        this.setState({ singleMovie: data.movie }))
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


  render() {
    return (
      <div>
        <header>
          <h1>Moldy Mangos</h1>
        </header>
        <main className='App'>
          <Switch>
            <Route path='/:id' render={({ match }) => {
              return (
                <SingleMovie key={match.params.id} id={match.params.id} movie={this.state.singleMovie} getMovieInfo={this.getMovieInfo} />
              )
            }
            }
            />
            < Route path='/' render={() => <Movies movies={this.state.allMovies} getMovieInfo={this.getMovieInfo} />} />
          </Switch>
        </main>
      </div >
    )
  }
}








export default App;

App.propTypes = {
  allMovies: PropTypes.array
}
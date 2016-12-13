import React, {Component} from 'react';
const imgURL = "https://image.tmdb.org/t/p/w300";
import MovieContainer from './MovieContainer';
import './Movielist.css';

class Movielist extends Component {
  constructor () {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount () {
    fetch(`https://movied.herokuapp.com/discover`)
      .then(response =>
        response.json()
      )
      .then(data =>
        this.setState({
          movies: data
        })
      )
  }

  renderMovies() {
    return this.state.movies.map(movie =>
      <MovieContainer imgPath={`${imgURL}${movie.poster_path}`} key={movie.id}
      movieId = {movie.id}/>)
  }

  render () {
    return (
      <div className="container">
        {this.renderMovies()}
      </div>
    )
  }
}
export default Movielist;

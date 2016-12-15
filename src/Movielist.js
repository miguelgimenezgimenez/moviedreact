import React, {Component} from "react";
import MovieContainer from "./MovieContainer";
import "./Movielist.css";
import {fetchMovies, toggleSeen} from './actions';
import {connect} from 'react-redux';

class Movielist extends Component {

  componentDidMount () {
    this.props.fetchMovies();
  }


  renderMovies() {
    const imgURL = "https://image.tmdb.org/t/p/w300";

    const moviearray = [];
    for (let movie in this.props.movies) {
      let seen = localStorage.getItem(this.props.movies[movie].id)|| this.props.movies[movie].seen;
      moviearray.push([this.props.movies[movie].poster_path,
        this.props.movies[movie].id,
        seen]);          }

    return moviearray.map(movie =>
      <MovieContainer imgPath={`${imgURL}${movie[0]}`} key={movie[1]}
                      movieId={movie[1]}
                      handleClick={()=>this.props.toggleSeen(movie[1])}
                      seen={movie[2]}
      />);
  }


  render () {
    return (
      <div className="container">
        {this.renderMovies()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  fetchMovies: () => dispatch(fetchMovies()),
  toggleSeen: (movieId) => dispatch(toggleSeen(movieId)),

  // decrement: () => dispatch(decrement()),
  // addTodo: (text) => dispatch(addTodo(text)),
  // toggleCompleted: (id) => dispatch(toggleCompleted(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);

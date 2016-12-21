import React, {Component} from "react";
import MovieContainer from "./MovieContainer";
import "./Movielist.css";
import { toggleSeen, discover} from './actions';
import {connect} from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

class Movielist extends Component {

  componentDidMount () {
    this.props.discover(`https://movied.herokuapp.com/discover`);
  }

  renderMovies() {
    const imgURL = "https://image.tmdb.org/t/p/w300";

    const moviearray = [];
    for (let movie in this.props.movies) {
      let seen = localStorage.getItem(this.props.movies[movie].id)|| this.props.movies[movie].seen;
      moviearray.push([this.props.movies[movie].poster_path,
        this.props.movies[movie].id,
        seen]);
    }

    return moviearray.map(movie =>(
      <div>
        <Link to={`/Movie${movie[0]}`}>
        <MovieContainer imgPath={`${imgURL}${movie[0]}`} key={movie[1]}
                        movieId={movie[1]}
                        handleClick={()=>this.props.toggleSeen(movie[1])}
                        seen={movie[2]}  />
      </Link>
  </div>
  )
  );


  }


  render () {
    return (
      <div className="container">
        {this.renderMovies()}
      </div>
    )
  }
}




const mapStateToProps = (state) => {

  let filteredMovies = {};
  const movies = state.movies;
  if (state.filter.length>0){
    for(let movie in movies) {
      if (movies[movie].original_title.toLowerCase().indexOf(state.filter.toLocaleLowerCase())>=0) {
        filteredMovies[movie]= (state.movies[movie]);
      }
    }
  } else {
    filteredMovies = state.movies;
  }
  return ({
    movies: filteredMovies,
  })
};

const mapDispatchToProps = (dispatch) => ({
  discover: (url,success) => dispatch(discover(url,success)),
  toggleSeen: (movieId) => dispatch(toggleSeen(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);

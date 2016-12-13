import React, {Component} from 'react';
import MovieContainer from './MovieContainer';
import './Movielist.css';




class Movielist extends Component {

  componentDidMount () {

    fetch(`https://movied.herokuapp.com/discover`)
      .then(response =>
        response.json()
      )
      .then(data =>{
          const myMovies = {};
          for (let movie in data) {
            data[movie].seen = false;
            myMovies[data[movie].id] = data[movie];
          }
          this.setState(myMovies);
        }
      )
  }

  renderMovies() {
    const imgURL = "https://image.tmdb.org/t/p/w300";

    const moviearray = [];
    for (let movie in this.state) {
      let seen = localStorage.getItem(this.state[movie].id)|| this.state[movie].seen;
      moviearray.push([this.state[movie].poster_path,
        this.state[movie].id,
        seen]);
    }
    console.log(this.state);

    return moviearray.map(movie =>
      <MovieContainer imgPath={`${imgURL}${movie[0]}`} key={movie[1]}
                      movieId={movie[1]}
                      handleClick={()=>this.handleClick(movie[1])}
                      seen={movie[2]}
      />);
  }



  handleClick(movieId) {
    console.log(movieId);
    localStorage.setItem(movieId,movieId);
    console.log(this.state[movieId].seen);

    const newMovie = { ...this.state[movieId] };
    newMovie.seen = true;
    const movieObj = {};
    movieObj[movieId] = newMovie;

    this.setState({
      [movieId]: newMovie
    });
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

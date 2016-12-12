import React, { Component} from 'react';
const imgURL  ="https://image.tmdb.org/t/p/w300";




class Movielist extends Component{

  constructor(){
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount(){
    fetch(`https://movied.herokuapp.com/discover`)
      .then(response =>
        response.json()
      )
      .then(data =>
        data.map((movie) => {
          const path = `${imgURL}${movie.poster_path}`;
          return <img src={path} alt=""/>
        }))
      .then(imagePath=>
        this.setState({
            movies :imagePath,
          }
        )
      )
  }

  render() {
    return (
      <div>{this.state.movies}  </div>
    )
  }
}


class movieContainer extends Component {

  render() {

  }
}


export default Movielist;

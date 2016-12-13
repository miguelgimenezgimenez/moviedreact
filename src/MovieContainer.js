import React, {
  Component,
  PropTypes,
} from 'react';
import './MovieContainer.css';
import IconButton from './Button/Iconbutton';

class MovieContainer extends Component {



  render () {
    let myclass;
    {this.props.seen ? myclass = "shadow movie-container" : myclass = 'movie-container'}
    return (
      <div className= {myclass}>
        <img src={this.props.imgPath} alt=""/>
        {this.props.seen? null : <IconButton movieId={this.props.movieId} onClick = {() => this.props.handleClick(this.props.movieId)}> </IconButton>}
      </div>
    );
  }
}

export default MovieContainer;

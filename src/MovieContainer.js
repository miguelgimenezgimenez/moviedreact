import React, {
  Component,
  PropTypes,
} from 'react';
import './MovieContainer.css';
import IconButton from './Button/Iconbutton';

class MovieContainer extends Component {
  constructor (){
    super();
    this.state = {
      seen: false,
    };
  }
  handleClick(id) {
    console.log(this);

    id[this.props.movieId].style.visibility = 'hidden';
    this.setState({
      seen: true
    });
  }

  render () {
    return (<div ref={this.props.movieID} className="movie-container">
        <img src={this.props.imgPath} alt=""/>
        <IconButton movieId={this.props.movieId} onClick = {(btn) => this.handleClick(btn)}> </IconButton>
      </div>
    );
  }
}
export default MovieContainer;

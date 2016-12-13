import React, {
  Component,
  PropTypes,
} from 'react';
import './iconbutton.css';
class Iconbutton extends Component {


  render() {
    return (
      <div className = "btncontainer" >
        < button  className = "btnmovie"
                  ref = {this.props.movieId}
                  onClick = {() => (this.props.onClick(this.refs))} > SEEN </button>
      </div>
    );
  }
}

export default Iconbutton;

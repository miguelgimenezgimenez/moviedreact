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
                  onClick = {() => (this.props.onClick())} > SEEN </button>
      </div>
    );
  }
}

export default Iconbutton;

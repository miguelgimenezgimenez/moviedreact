import React, {
  Component,
  PropTypes,
} from 'react';


class movie extends Component {

   constructor (title, posterUrl){
     super();
     this.title = title;
     this.posterUl = posterUrl;

   }




  render () {
    return (
      <div></div>
    );
  }
}
movie.propTypes = {};
movie.defaultProps = {};
export default movie;

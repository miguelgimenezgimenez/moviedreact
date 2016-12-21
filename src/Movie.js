import React, {
  Component,
  PropTypes,
} from 'react';
import {connect} from 'react-redux';

class Movie extends Component {
  render () {
    console.log(this);

    return (
      <div>
        <img src={`https://image.tmdb.org/t/p/w300/${this.props.params.movieId}`} alt=""/>
        <h1>movue</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const movies = state.movies ;

};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);



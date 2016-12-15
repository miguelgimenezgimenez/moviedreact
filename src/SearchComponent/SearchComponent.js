import React, {
  Component,
  PropTypes,
} from 'react';
import {connect} from 'react-redux';
import {filterMovies} from '../actions';



class SearchComponent extends Component {
  render () {
    return (
      <div>
        <input type="text" placeholder="Search..." onChange={this.props.filterMovies}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  searchQuery:state.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovies: (search) => dispatch(filterMovies(search))


});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

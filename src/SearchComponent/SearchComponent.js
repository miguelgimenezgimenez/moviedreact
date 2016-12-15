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
        <input type="text" placeholder="Search..." onKeyPress={this.props.filterMovies}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  searchQuery:state.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  filterMovies: (search) => dispatch(filterMovies(search))


  // decrement: () => dispatch(decrement()),
  // addTodo: (text) => dispatch(addTodo(text)),
  // toggleCompleted: (id) => dispatch(toggleCompleted(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

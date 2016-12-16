import React, {
  Component,
  PropTypes,
} from 'react';
import {connect} from 'react-redux';
import {filterByCategories} from './actions';


class CategoriesButton extends Component {
  render () {
    return (
      <div>
        <button
          onClick={() => this.props.filterByCategories(`https://movied.herokuapp.com/categories/${this.props.catId}`)}>

          {this.props.children}

        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  searchQuery:state.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  filterByCategories: (id) => dispatch(filterByCategories(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesButton);

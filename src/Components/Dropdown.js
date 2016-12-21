import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';

import {filterByCategories} from '../actions';

class PopoverExampleAnimation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render () {
    return (
      <div>
        <RaisedButton
          onMouseDown={this.handleTouchTap}
          label="CATEGORIES"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem
              onClick={() => this.props.filterByCategories(`https://movied.herokuapp.com/categories/27`)
              }
              primaryText="ACTION"/>
            <MenuItem
              onClick={() => this.props.filterByCategories(`https://movied.herokuapp.com/categories/35`)
              }
              primaryText="COMEDY"/>
            <MenuItem
              onClick={() => this.props.filterByCategories(`https://movied.herokuapp.com/categories/24`)
              }
              primaryText="ADVENTURE"/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  filterByCategories: (id) => dispatch(filterByCategories(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(PopoverExampleAnimation);

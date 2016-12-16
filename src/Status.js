import React, {
  Component,
} from 'react';
import {connect} from 'react-redux';
import CircularProgressExampleSimple from './Components/progress';

class Status extends Component {
  showStatus () {
    switch (this.props.status) {
      case 'OK':
        return <h1>
            MOVIESLIST
        </h1>;
        case 'LOADING':
        return <h1>
            <CircularProgressExampleSimple>

            </CircularProgressExampleSimple>
        </h1>;
        case 'ERROR':
        return <h1>
            <CircularProgressExampleSimple>

            </CircularProgressExampleSimple>
        </h1>;

      default  :
        return;
    }
  }

  render () {
    return (
      <div>
        {this.showStatus()}

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  status: state.status,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Status);

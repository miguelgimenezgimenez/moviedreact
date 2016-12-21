import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber800, black, grey100, grey900} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// my imports
import './App.css';
import {Router, Route, Link, browserHistory} from 'react-router'
import SearchComponent from './SearchComponent/SearchComponent';
import Movielist from './Movielist';
import Status from './Status';
import PopoverExampleAnimation from './Components/Dropdown';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
    textColor: grey100,
  },
  appBar: {
    color: black,
  },
});
import Movie from './Movie';
class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          {/*<AppBar title="Movied"/>*/}
          <SearchComponent/>
          <PopoverExampleAnimation/>
          <div style={{padding: 24}}>
            <Status></Status>
            <Router history={browserHistory}>
              <Route path="/" component={ Movielist }/>
              <Route path="/movie/:movieId" component={Movie}/>
            </Router>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;

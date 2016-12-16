import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber800, black, grey100, grey900} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// my imports

import './App.css';
import SearchComponent from './SearchComponent/SearchComponent';
import Movielist from './Movielist';
import CategoriesButton from './CategoriesButton';
import Status from './Status';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
    textColor: grey100,
  },
  appBar: {
    color: black,
  },
});
class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar title="Movied"/>
          <SearchComponent></SearchComponent>
          <div style={{padding: 24}}>
            <CategoriesButton catId="27">Action</CategoriesButton>
            <CategoriesButton catId="2">Comedy</CategoriesButton>
            <CategoriesButton catId="14">Adventure</CategoriesButton>
            <Status></Status>
            <Movielist></Movielist>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;

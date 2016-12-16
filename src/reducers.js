// REMOVE-START
import { combineReducers } from 'redux';


const movies = (state={},action) => {

  switch (action.type) {

    case 'ADD_MOVIES':
      const myMovies = {};
      for (let element in action.movies) {
        action.movies[element].seen = false;
        myMovies[action.movies[element].id] = action.movies[element];
      }

      return Object.assign({}, state, myMovies);

    case 'TOGGLE_SEEN':

      const newState =Object.assign({},state);
      newState[action.movieId].seen = !newState[action.movieId].seen;
      return newState;


    default:
      return state;
  }
};



const filter = (state= '',action)=> {
  switch (action.type) {
    case 'FILTER_MOVIES':
      return action.searchQuery.target.value;

    default:
      return state
  }
};


const status = (state = 'OK', action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return 'OK';
    case 'LOADING_MOVIE':
      console.log('loadingmovie');
      return 'LOADING';
    case 'ERROR':
      return 'ERROR';
    default:
      return state
  }
};



// Combining both reducers
const reducers = combineReducers({
  movies,
  filter,
  status
});

export default reducers;
// REMOVE-END

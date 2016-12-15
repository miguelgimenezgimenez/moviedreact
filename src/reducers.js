// REMOVE-START
import { combineReducers } from 'redux';


const movies = (state={},action) => {

  switch (action.type) {
    case 'ADD_MOVIES':
      return Object.assign({}, state, action.movies);

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



// Combining both reducers
const reducers = combineReducers({
  movies,
  filter,
});

export default reducers;
// REMOVE-END

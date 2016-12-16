export const fetchMovies = () => function (dispatch) {

  fetch(`https://movied.herokuapp.com/discover`)
    .then(response =>
      response.json()
    )
    .then(data => {
        const myMovies = {};
        for (let movie in data) {
          data[movie].seen = false;
          myMovies[data[movie].id] = data[movie];
        }
        dispatch(addMovies(myMovies));
      }
    );
};


 const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies:movies

});



export const toggleSeen= (movieId) => ({
  type:'TOGGLE_SEEN',
  movieId:movieId

});


export const filterMovies= (searchQuery) => ({
  type:'FILTER_MOVIES',
  searchQuery:searchQuery

});

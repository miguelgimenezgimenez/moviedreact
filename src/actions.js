export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies,
});



export const toggleSeen= (movieId) => ({
  type:'TOGGLE_SEEN',
  movieId:movieId

});


export const filterMovies= (searchQuery) => ({
  type:'FILTER_MOVIES',
  searchQuery:searchQuery

});


export const filterByCategories = (url) => ({
  type: 'MOVIES_BY_CATEGORY',
  url,
  success:addMovies


});
export const discover = (url) => ({
  type: 'DISCOVER',
  url,
  success:addMovies


});

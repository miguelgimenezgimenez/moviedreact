
function createApiMiddleware (extraArgument) {
  return function (store) {
    let dispatch = store.dispatch,
      getState = store.getState;
    return function (next) {
      return function (action) {
        if (action.hasOwnProperty('url')) {
          next({type: 'LOADING_MOVIE'});
          return myFetch(dispatch, action.url, action.success);
        }
        return next(action);
      };
    };
  };
}

function myFetch (dispatch,url,success) {
  fetch(url)
    .then(response =>
      response.json()
    )
    .then(data => {
        dispatch(success(data));
      }
    )
    .catch((error=>{
        dispatch({
          type: 'ERROR',
          error,
        });
        }
      )
    )
  ;


}
const apiMiddleware = createApiMiddleware();
apiMiddleware.withExtraArgument = createApiMiddleware;
export default apiMiddleware;


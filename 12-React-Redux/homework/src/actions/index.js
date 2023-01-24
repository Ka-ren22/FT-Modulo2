
   export function getMovies(titulo) {   //Accion asincrona, hace un llamado a la api
    return function(dispatch) {
      return fetch(input, `http://www.omdbapi.com/?apikey=tuApiKey&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }
  
  export function getMovieDetail(id) {    //Accion asincrona, hace un llamado a la api
    return function(dispatch) {
      return fetch(input, `http://www.omdbapi.com/?apikey=tuApiKey&s=${id}`)
        .then(response => response.json())
        .then(detail => {
          dispatch({ type: "GET_MOVIES", payload: detail });
        });
    };
  }

  export function addMovieFavorite(movie) {
    return  {
      type: 'ADD_MOVIE_FAVORITE',
      payload: movie
    };
  }

  export function removeMovieFavorite(id){
    return{
        type: 'REMOVE_MOVIE_FAVORITE',
        payload:id
    }
  }
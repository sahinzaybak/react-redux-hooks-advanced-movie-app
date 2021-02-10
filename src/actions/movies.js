import axios from 'axios'
export function fetchMovies() { 
  return dispatch => {
     axios.get("https://6016a17df534300017a44ca3.mockapi.io/movies").then(value => {
      dispatch({
        type: "FETCH_MOVIES",
        payload : value.data,
      });
    });
  };
}

export function saveMovie(newMovieInfo) {
  debugger;
  return dispatch => {
    axios.post("https://6016a17df534300017a44ca3.mockapi.io/movies", {
      name: newMovieInfo._name,
      title: newMovieInfo._title,
      category: newMovieInfo._category,
      slug: newMovieInfo._slug,
      poster: newMovieInfo._poster,
      music: newMovieInfo._music,
      director: newMovieInfo._director,
      writer: newMovieInfo._writer,
      trailer: newMovieInfo._trailer,
      time: newMovieInfo._time,
      year: newMovieInfo._year,
      point: newMovieInfo._point,
      platform: "movies"
    }).then(value => {
      debugger;
      dispatch({
        type: "NEW_MOVIE_RESULT",
        payload: value.statusText
      });
    })
  }
}


export function editMovie(movieInfo) {
  return dispatch => {
    axios.put(`https://6016a17df534300017a44ca3.mockapi.io/${movieInfo._platform}/${movieInfo._id}`, {
      name: movieInfo._name,
      title: movieInfo._title,
      category: movieInfo._category,
      slug: movieInfo._slug,
      poster: movieInfo._poster,
      music: movieInfo._music,
      director: movieInfo._director,
      writer: movieInfo._writer,
      trailer: movieInfo._trailer,
      time: movieInfo._time,
      year: movieInfo._year,
      point: movieInfo._point,
      platform: "movies"
    }).then(value => {
      dispatch({
        type: "EDIT_RESULT",
        payload: value
      });
    })
  }
}

export function searchMovies(searchText) {
  return dispatch => {
    axios.get(`https://6016a17df534300017a44ca3.mockapi.io/movies?name=${searchText}`).then(value => {
      dispatch({
        type: "SEARCH_MOVIE_RESULT",
        payload: value.data
      });
    })
  }
}
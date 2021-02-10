import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL
export function fetchMovies() { 
  return async dispatch => {
    await axios.get(`${BASE_URL}/movies`).then(value => {
      dispatch({
        type: "FETCH_MOVIES",
        payload : value.data,
      });
    });
  };
}

export function saveMovie(newMovieInfo) {
  return async dispatch => {
    await axios.post(`${BASE_URL}/movies`, {
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
      dispatch({
        type: "NEW_MOVIE_RESULT",
        payload: value.statusText
      });
    })
  }
}


export function editMovie(movieInfo) {
  return async dispatch => {
    await axios.put(`${BASE_URL}/${movieInfo._platform}/${movieInfo._id}`, {
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
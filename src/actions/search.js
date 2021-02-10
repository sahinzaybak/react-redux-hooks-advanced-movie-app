import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL
export function searchGames(searchText) {
  return async dispatch => {
    await axios.get(`${BASE_URL}/games?name=${searchText}`).then(value => {
      dispatch({
        type: "SEARCH_GAME_RESULT",
        payload: value.data
      });
    })
  }
}

export function searchMovies(searchText) {
  return async dispatch => {
    await axios.get(`${BASE_URL}/movies?name=${searchText}`).then(value => {
      dispatch({
        type: "SEARCH_MOVIE_RESULT",
        payload: value.data
      });
    })
  }
}

export function searchActiveOverlay() {
  return dispatch => {
    dispatch({
      type: "ACTIVE_SEARCH_OVERLAY",
      payload: "true"
    });
  }
}

export function searchDisableOverlay() {
  return dispatch => {
    dispatch({
      type: "DISABLED_SEARCH_OVERLAY",
      payload: "false"
    });
  }
}

export function searchListClear() {
  return dispatch => {
    dispatch({
      type: "SEARCH_LIST_CLEAR",
    });
  }
}
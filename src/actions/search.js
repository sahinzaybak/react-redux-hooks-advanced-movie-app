import axios from 'axios'
export function searchGames(searchText) {
  return async dispatch => {
    await axios.get(`https://6016a17df534300017a44ca3.mockapi.io/games?name=${searchText}`).then(value => {
      dispatch({
        type: "SEARCH_GAME_RESULT",
        payload: value.data
      });
    })
  }
}

export function searchMovies(searchText) {
  return async dispatch => {
    await axios.get(`https://6016a17df534300017a44ca3.mockapi.io/movies?name=${searchText}`).then(value => {
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
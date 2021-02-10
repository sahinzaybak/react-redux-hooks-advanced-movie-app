import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL
export function fetchGames() {
  return async dispatch => {
   await axios.get(`${BASE_URL}/games`).then(value => {
      dispatch({
        type: "FETCH_GAMES",
        payload: value.data,
      });
    });
  };
}

export function detail(platform, slug) {
  return async dispatch => {
    await axios.get(`${BASE_URL}/${platform}?slug=${slug}`).then(value => {
      dispatch({
        type: "SET_DETAIL",
        payload: value.data[0],
      });
    });
  };
}

export function saveGames(newGameInfo) {
  return async dispatch => {
    await axios.post(`${BASE_URL}/games`, {
      name: newGameInfo._name,
      title: newGameInfo._title,
      category: newGameInfo._category,
      slug: newGameInfo._slug,
      poster: newGameInfo._poster,
      music: newGameInfo._music,
      company: newGameInfo._company,
      trailer: newGameInfo._trailer,
      time: newGameInfo._time,
      year: newGameInfo._year,
      point: newGameInfo._point,
      platform: "games"
    }).then(value => {
      dispatch({
        type: "NEW_GAME_RESULT",
        payload: value.statusText
      });
    })
  }
}

export function editGames(gameInfo) {
  return async dispatch => {
    await axios.put(`${BASE_URL}/${gameInfo._platform}/${gameInfo._id}`, {
      name: gameInfo._name,
      title: gameInfo._title,
      category: gameInfo._category,
      slug: gameInfo._slug,
      poster: gameInfo._poster,
      backdrop: gameInfo._backdrop,
      company: gameInfo._company,
      trailer: gameInfo._trailer,
      time: gameInfo._time,
      year: gameInfo._year,
      point: gameInfo._point,
      platform: "games"
    }).then(value => {
      dispatch({
        type: "EDIT_RESULT",
        payload: value
      });
    })
  }
}

export function clearDetail() {
  return dispatch => {
      dispatch({
        type: "CLEAR_DETAIL",
        payload: true
      });
  }
}
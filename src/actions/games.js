import axios from 'axios'
export function fetchGames() {
  return dispatch => {
    axios.get("https://6016a17df534300017a44ca3.mockapi.io/games").then(value => {
      dispatch({
        type: "FETCH_GAMES",
        payload: value.data,
      });
    });
  };
}

export function detail(platform, slug) {
  return dispatch => {
    axios.get(`https://6016a17df534300017a44ca3.mockapi.io/${platform}?slug=${slug}`).then(value => {
      dispatch({
        type: "SET_DETAIL",
        payload: value.data[0],
      });
    });
  };
}

export function saveGames(newGameInfo) {
  return dispatch => {
    axios.post("https://6016a17df534300017a44ca3.mockapi.io/games", {
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

      debugger;
      dispatch({
        type: "NEW_GAME_RESULT",
        payload: value.statusText
      });
    })
  }
}

export function editGames(gameInfo) {
  return dispatch => {
    axios.put(`https://6016a17df534300017a44ca3.mockapi.io/${gameInfo._platform}/${gameInfo._id}`, {
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


export function searchGames(searchText) {
  return dispatch => {
    axios.get(`https://6016a17df534300017a44ca3.mockapi.io/games?name=${searchText}`).then(value => {
      debugger;
      dispatch({
        type: "SEARCH_GAME_RESULT",
        payload: value.data
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
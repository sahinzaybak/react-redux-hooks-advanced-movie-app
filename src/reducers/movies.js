const initialState = {
  movieList: [],
  searchList:[],
  createMovieResult:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return{
        ...state,
        movieList: action.payload
      }
    case "NEW_MOVIE_RESULT":
        return{
          ...state,
          createMovieResult: action.payload
        }
    case "SEARCH_MOVIE_RESULT":
        return{
          ...state,
          searchList: action.payload
        }
    default:
      return state;
  }
}

// buradan sonra rootReducer'a veri basılır otomatik(state)

//https://zaferayan.medium.com/react-native-instagram-redux-kullan%C4%B1m%C4%B1-10e29c8e3f1b
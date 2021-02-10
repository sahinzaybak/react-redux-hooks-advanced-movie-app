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

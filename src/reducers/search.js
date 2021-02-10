const initialState = {
  searchOverlay:'',
  searchListGame:[],
  searchListMovie:[],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_GAME_RESULT":
      return{
        ...state,
        searchListGame: action.payload
      }
    case "SEARCH_MOVIE_RESULT":
      return{
        ...state,
        searchListMovie: action.payload
      }
    case "ACTIVE_SEARCH_OVERLAY":
      return{
        ...state,
        searchOverlay: action.payload
      }
    case "DISABLED_SEARCH_OVERLAY":
      return{
        ...state,
        searchOverlay: action.payload
      }
    case "SEARCH_LIST_CLEAR":
      return{
        ...state,
        searchListGame:[],
        searchListMovie :[]
      }
    default:
      return state;
  }
}

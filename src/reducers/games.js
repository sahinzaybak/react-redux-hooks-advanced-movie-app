const initialState = {
  gameList: [],
  detail:[],
  createGameResult:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return{
        ...state,
        gameList: action.payload
      }
    case "SET_DETAIL":
      return{
        ...state,
        detail: action.payload
      }
    case "EDIT_RESULT":
      return{
        ...state,
        createGameResult: action.payload.statusText,
        detail: action.payload.data
      }
    case "NEW_GAME_RESULT":
      return{
        ...state,
        createGameResult: action.payload
      }
    case "CLEAR_DETAIL":
        return{
          ...state,
          detail: ''
        }
    default:
      return state;
  }
}
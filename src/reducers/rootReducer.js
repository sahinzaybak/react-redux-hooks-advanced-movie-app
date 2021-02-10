//STATE
//Tüm state burada birleştiricem
import {combineReducers} from 'redux'
import movies from './movies'
import games from './games'

export default combineReducers({
  movies,
  games
})
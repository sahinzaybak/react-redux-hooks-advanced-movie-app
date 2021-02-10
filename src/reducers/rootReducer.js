import {combineReducers} from 'redux'
import movies from './movies'
import games from './games'
import search from './search'

export default combineReducers({
  movies,
  games,
  search
})
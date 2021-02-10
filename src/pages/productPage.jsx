import React, { PureComponent } from 'react'
import propTypes from 'prop-types' 
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.

//Component
import GameList from '../components/gameList.jsx'
import MovieList from '../components/movieList.jsx'

//Actions
import {fetchMovies} from '../actions/movies'
import {fetchGames} from '../actions/games'
import {clearDetail} from '../actions/games'

class moviesPage extends PureComponent {
  static propTypes = { 
    movies : propTypes.object.isRequired, //hem array olacak hem de gerekli olacak. //movies = { this.props.movies} propstype adı üstüne..
    games : propTypes.object.isRequired //hem array olacak hem de gerekli olacak.   //games  = {this.props.games} 
  } 

  render() {
    return (
      <div className="custom-container">
        <GameList games={this.props.games} />
        <MovieList movies={this.props.movies} />
      </div>
    )
  }
  
  //Created
  componentDidMount(){
    this.props.fetchMovies(); //action
    this.props.fetchGames(); //action
    this.props.clearDetail(); //action detay state temizle
  }
}

//STATE VERİ ALMA
//tüm state'deki(rootReducer) movies arraymı aldım ve props gibi kullanmaya başladım. "console.log(this.props)" yazdırırsak "movies[]" olarak görebiliriz.
const mapStateToProps = (state) => { //state => movies --> movies bana rootReducerdan geliyor..
  return {
    movies: state.movies,
    games: state.games
  } 
}

//ACTION ÇAĞIRMA
//Tanımlama yayıp created props olarak actiona gönderiyorum.
const mapDispatchToProps = { //this.props.fetchMovies(); propsta tanımlayıp kullanabilmem için props tanımlamamız gerekiyor.
  fetchMovies,
  fetchGames,
  clearDetail
}

export default connect(mapStateToProps,mapDispatchToProps) (moviesPage);

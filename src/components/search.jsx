import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.
import searchIcon from '../assets/images/search.svg';

//actions
import {searchGames} from '../actions/games'
import {searchMovies} from '../actions/movies'

class search extends PureComponent {
  state= {
    isSearch:false
  }
  searchText(search) {
    if(search.target.value.length >= 3){
      this.state.isSearch = true
      this.props.searchGames(search.target.value) // games action
      this.props.searchMovies(search.target.value) // movies action
    }

    if(search.target.value.length == 0){
      this.setState({isSearch: false }) // state değişimi setState ile gerçekleşir.  => this.state.isSearch = false işe yaramaz!
    }
  }

  closeSearch = () => { //setState görmesi için arrowFunction kullanılması gerekli.
    this.setState({isSearch: false }) 
    this.searchInput.value = ""; //ref={(el) => (this.searchInput = el)} 
  }

  render() {
    return (
      <div className="search w-100">
        <div className="search-item d-flex align-items-center">
          <img className="search-icon pl-4" src={searchIcon} loading="lazy"/>
          <input type="text" autoFocus placeholder="Oyun yada film ara" ref={(el) => (this.searchInput = el)} onKeyUp={this.searchText.bind(this)}/>
        </div>
        <div className={`search-result ${this.state.isSearch ? "active" : ""}`}>
          {this.props.searchListGames.length == 0 && this.props.searchListMovie.length == 0 && <h6>Bir sonuç bulunamadı.</h6>}
          
          {/* Games search */}
          {this.props.searchListGames.map(searchItem => 
            <Link to={`/detail/${searchItem.platform}/${searchItem.slug}`} key={searchItem.id} onClick={this.closeSearch} className="search-result__item">
              <div className="d-flex">
                <img src={searchItem.poster} alt=""/>
                <div className="d-flex flex-column">
                  <h6 className="search-result__name">{searchItem.name} ({searchItem.year})</h6>
                  <p className="search-result__cat">{searchItem.category}</p>
                </div>
              </div>
              <div className="d-flex">
                <p className="search-item__platform green">Oyun</p>
              </div>
            </Link>
        )}

        {/* Movie search */}
        {this.props.searchListMovie.map(searchItem => 
          <Link to={`/detail/${searchItem.platform}/${searchItem.slug}`} key={searchItem.id} onClick={this.closeSearch} className="search-result__item">
            <div className="d-flex">
              <img src={searchItem.poster} alt=""/>
              <div className="d-flex flex-column">
                <h6 className="search-result__name">{searchItem.name} ({searchItem.year})</h6>
                <p className="search-result__cat">{searchItem.category}</p>
              </div>
            </div>
            <div className="d-flex">
            <p className="search-item__platform red">Film</p>
            </div>
          </Link>
        )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //state => state.games --> games bana rootReducerdan geliyor..
  return {
    searchListGames: state.games.searchList,
    searchListMovie: state.movies.searchList
  } 
}

const mapDispatchToProps = { 
  searchGames,
  searchMovies
}

export default connect(mapStateToProps,mapDispatchToProps) (search);

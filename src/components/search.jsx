import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.
import searchIcon from '../assets/images/search.svg';
import { debounce } from 'lodash'

//actions
import {searchGames, searchMovies, searchActiveOverlay, searchDisableOverlay, searchListClear } from '../actions/search'

class search extends PureComponent {
  state = {
    loading:false,
    noResult:false
  }

  searchText = debounce(async(search) => {
    if(search.target.value.length >= 3){
      this.setState({loading:true})
      await this.props.searchGames(search.target.value) // games action
      await this.props.searchMovies(search.target.value) // movies action
      this.setState({loading:false})
      this.props.searchActiveOverlay();
    }
    //lenght 0 ise search array temizle
    if(search.target.value.length < 3){
      this.setState({loading:false})
      this.props.searchDisableOverlay();
      setTimeout(() => {
        this.props.searchListClear();
      }, 200);
    }
  },600)

  closeSearch = () => { //setState görmesi için arrowFunction kullanılması gerekli.
    this.searchInput.value = ""; //ref={(el) => (this.searchInput = el)} 
  }

  render() {
    return (
      <div className="search w-100">
        <div className="search-item d-flex align-items-center">
          {!this.state.loading &&
            <img className="search-icon pl-4" src={searchIcon}/>
          }
          {this.state.loading &&
           <div className="spinner-border search-icon" role="status"></div>
          }
          <input type="text" autoFocus placeholder="Oyun yada film ara" ref={(el) => (this.searchInput = el)} 
            onChange={e => this.searchText(e)}/>
        </div>

        <div className={`search-result ${this.props.boolSearchOverlay == "true" ? "active" : ""}`}>
          {this.props.searchListGames.length == 0 && this.props.searchListMovie.length == 0 && 
            <h6>Aradığınız kelimeye ait oyun yada film bulunamadı..</h6>
          }
          
          {/* Games search */}
          {this.props.searchListGames.map(searchItem => 
            <Link to={`/detail/${searchItem.platform}/${searchItem.slug}`} key={searchItem.id} onClick={this.closeSearch} className="search-result__item">
              <div className="d-flex">
                <img src={searchItem.poster} loading="lazy"/>
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
              <img src={searchItem.poster} loading="lazy"/>
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
    searchListGames: state.search.searchListGame,
    searchListMovie: state.search.searchListMovie,
    boolSearchOverlay: state.search.searchOverlay
  } 
}

const mapDispatchToProps = { 
  searchGames,
  searchMovies,
  searchActiveOverlay,
  searchDisableOverlay,
  searchListClear
}

export default connect(mapStateToProps,mapDispatchToProps) (search);

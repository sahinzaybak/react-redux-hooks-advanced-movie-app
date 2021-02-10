import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux"; //redux ile bağlantı kurmak için connect gerekli.

//Component
import GameList from "../components/gameList.jsx";
import MovieList from "../components/movieList.jsx";

//Actions
import { fetchMovies  } from "../actions/movies";
import { clearDetail, fetchGames } from "../actions/games";
import { searchDisableOverlay  } from "../actions/search";

class moviesPage extends PureComponent {
  static propTypes = {
    movies: propTypes.object.isRequired, //hem obje olacak hem de gerekli olacak. //movies = { this.props.movies} propstype adı üstüne..
    games: propTypes.object.isRequired, //hem obje olacak hem de gerekli olacak.   //games  = {this.props.games}
  };

  render() {
    return (
      <div>
        <div className={`search-overlay ${this.props.boolSearchOverlay == "true" ? "active" : ""}`} onClick={this.closeOverlay}></div>
        <div className="custom-container">
          <GameList games={this.props.games} />
          <MovieList movies={this.props.movies} />
        </div>
      </div>
    );
  }

  //Created
  componentDidMount() {
    this.props.fetchMovies(); //action
    this.props.fetchGames(); //action
    this.props.clearDetail(); //action detay state temizle
  }

  //Leave Page
  componentWillUnmount(){
    this.props.searchDisableOverlay();
  }

  closeOverlay = () => {
    this.props.searchDisableOverlay();
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    games: state.games,
    boolSearchOverlay: state.search.searchOverlay
  };
};

const mapDispatchToProps = {
  fetchMovies,
  fetchGames,
  clearDetail,
  searchDisableOverlay
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesPage);

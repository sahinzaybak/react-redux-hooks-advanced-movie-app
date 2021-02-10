import React from 'react'
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom';
import ContentLoader from 'react-content-loader'

const gameList = ({ games }) => { //no props => ({movies})

return (
  <div className="movie pt-3 pt-md-5 mt-3"> 
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h2 className="">OYUNLAR</h2>
      <Link to="/add/game" className="movie-add green">Oyun Ekle</Link>
    </div>

  {games.gameList.length == 0 &&
    <div className="d-flex">
      {[...Array(6)].map((x, i) =>
        <ContentLoader viewBox="0 0 500 880" key={i}>
          <rect x="3" y="3" rx="30" ry="30" width="460" height="700" />
          <rect x="6" y="760" rx="0" ry="0" width="292" height="20" />
       </ContentLoader>
      )}
    </div>
  }

    <div className="row">
    {games.gameList.map(game => 
        <div className="col-6 col-md-4 col-lg-2 movie-item mb-4" key={game.id}> 
          <Link to={`/detail/${game.platform}/${game.slug}`} className="movie-item__drop">
            <img className="movie-item__img" src={game.poster} alt="" loading="lazy"/>
              <CircularProgressbar className="ml-2" value={game.point} text={`${game.point}%`} strokeWidth={6} background
                styles={buildStyles({
                  textSize: '30px',
                  backgroundColor: "#000",
                  textColor: '#fff',
                  trailColor: '#0c502f',
              })} />
          </Link>
          <h2 className="movie-item__name mb-3 mt-2">{game.name}</h2>
        </div>)
    }
    </div>
  </div>
 )
}

gameList.propTypes = {
  games: PropTypes.object.isRequired
};

export default gameList;
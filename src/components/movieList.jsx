import React from 'react'
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom';
import ContentLoader from 'react-content-loader'

const movieList = ({ movies }) => { //props yerine direk ({movies})
  return (
    <div className="movie pt-5"> 
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="">FİLMLER</h2>
        <Link to="/add/movie" className="movie-add yellow">Film Ekle</Link>
      </div>

    {movies.movieList.length == 0 &&
      <div className="d-flex">
        {[...Array(6)].map((x, i) =>
          <ContentLoader viewBox="0 0 500 880">
            <rect x="3" y="3" rx="30" ry="30" width="460" height="700" />
            <rect x="6" y="760" rx="0" ry="0" width="292" height="20" />
        </ContentLoader>
        )}
      </div>
    }
    
      <div className="row">
      {
        movies.movieList.map(movie => 
          <div className="col-6 col-md-4 col-lg-2 movie-item mb-4" key={movie.id}> 
            <Link to={`/detail/${movie.platform}/${movie.slug}`} className="movie-item__drop">
            <img className="movie-item__img" src={movie.poster} alt="" loading="lazy"/>
              <CircularProgressbar className="ml-2" value={movie.point} text={`${movie.point}%`} strokeWidth={6} background
                styles={buildStyles({
                  textSize: '30px',
                  backgroundColor: "#000",
                  textColor: '#fff',
                  trailColor: '#fff',
              })} />
            </Link>
            <h2 className="movie-item__name mb-3 mt-2">{movie.name}</h2>
          </div>)
      }
      </div>
    </div>
  )
}

movieList.propTypes = {
  movies: PropTypes.object.isRequired
};

export default movieList;
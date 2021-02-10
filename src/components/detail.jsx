import React,{useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom';

//Images
import muted from '../assets/images/volume-x.svg';
import play from '../assets/images/play.svg';
import up from '../assets/images/chevrons-up.svg';
import close from '../assets/images/close.svg';
import back from '../assets/images/arrow-left.svg';

//Component
import EditMovie from '../components/editMovie'
import EditGames from '../components/editGame'
import ContentLoaderDetail from '../components/contentLoaderDetail'

const MovieDetail = ({ detailInfo }) => { //no props => ({movies})
const volumeTrailer = 1;
const volumePosterTrailer = 0.8;

const [playingPoster, setPlayPoster] = useState(true) //poster trailer
const [trailerMuted, setTrailerMuted] = useState(true) //arka plan video ses
const [isTrailer, setTrailer] = useState(false) //trailer izlemek istiyor mu?
const [isMute, setIsMute] = useState(false) //trailerdan çıkınca mute aktif mi?
const [isEdit, setIsEdit] = useState(false) //trailerdan çıkınca mute aktif mi?
 
function toggleMute(){
  setPlayPoster(!playingPoster);
  if(playingPoster) setIsMute(true) // isMute = true
  else setIsMute(false)
}

function isMutePoster(){
  if(isMute) setPlayPoster(false) // playingPoster = false
  else setPlayPoster(true)
}

//Mobile arka plan trailer için.
function bodyAddClass(){
  document.body.classList.add("overflow-hidden");
}

function bodyRemoveClass(){
  document.body.classList.remove("overflow-hidden");
}

return (
  <div className={`${isTrailer ? "activeTrailer" : ""}`}> 
    <div className={`movie-detail__backdrop ${isEdit ? "active" : ""}`}>
       <ReactPlayer volume={volumeTrailer} loop={true} playing={true} muted={trailerMuted}  url={detailInfo.trailer} loading="lazy"/>
    </div>
      <div className={`movie-detail__wrp ${isEdit ? "active-edit" : ""}`}>
        <div className="custom-container">
          {!detailInfo.title &&
            <ContentLoaderDetail />
          }
      {detailInfo.title && 
          <div className={`movie-detail__content ${isEdit ? "active" : ""}`}>
            <div className="row">
              <div className="col-md-3">
                <Link to={"/"} className="movie-detail__back">
                  <img src={back} alt=""/>
                </Link>
                <div className="movie-detail__poster">
                  <img src={detailInfo.poster} loading="lazy"/>
                  <div className="movie-detail__spotify">
                    <ReactPlayer volume={volumePosterTrailer} loop={true} playing={playingPoster} url={detailInfo.music} loading="lazy"/>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                  <div className="movie-detail__info text-white p-3">
                    <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                      <h2 className="movie-detail__title">{detailInfo.name} <span>({detailInfo.year})</span></h2>
                        {detailInfo.platform=="games" && 
                          <p className="movie-add green mt-2 md-md-0 mb-0 mb-md-3" onClick={() => {setIsEdit(true); bodyAddClass()}}>Oyunu Düzenle</p>
                        }
                        {detailInfo.platform=="movies" && 
                          <p className="movie-add yellow mt-2 md-md-0 mb-0 mb-md-3" onClick={() =>{setIsEdit(true); bodyAddClass()}}>Filmi Düzenle</p>
                        }
                    </div>
                    <div className="d-flex group mt-2">
                      {detailInfo.company && 
                        <p className="movie-detail__top mr-2 mr-md-3">{detailInfo.company} </p>
                      }
                      {detailInfo.director && 
                        <p className="movie-detail__top mr-3">{detailInfo.director} </p>
                      }
                      {detailInfo.writer && 
                        <p className="movie-detail__top mr-3">{detailInfo.writer} </p>
                      }
                      <p className="movie-detail__top ">{detailInfo.category} </p>
                      <p className="movie-detail__top ml-3 d-none d-md-flex">{detailInfo.time} </p>
                    </div>
                    <div className="d-flex movie-detail__center align-items-center mt-3">
                      <CircularProgressbar value={detailInfo.point} text={`${detailInfo.point}%`} strokeWidth={6} background
                        styles={buildStyles({
                          textSize: '30px',
                          backgroundColor: "#000",
                          textColor: '#fff',
                          trailColor: '#0c502f',
                      })} />
                      <div className={`movie-detail__icon ml-3 cursor-pointer ${isMute ? "opacity" : ""}`} onClick={toggleMute}>
                        <img src={muted} alt=""/>
                      </div>
                      <div className="d-flex align-items-center cursor-pointer" onClick={() => {
                          setPlayPoster(false); 
                          setTrailer(true); 
                          setTrailerMuted(false); 
                          bodyAddClass();
                        }}>
                        <div className="movie-detail__icon ml-3 mr-2">
                          <img src={play} alt=""/>
                        </div>
                        <p>Fragmana geç</p>
                      </div>
                    </div>
                    <div className="movie-detail__bottom mt-5">
                      <h5 className="movie-detail__sum-title mb-2">Özet</h5>
                      <p className="movie-detail__summary">{detailInfo.title} </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          }
          <div className={`movie-detail__edit ${isEdit ? "active" : ""}`}>
             <img className="back-icon" src={close} onClick={() => {setIsEdit(false);  bodyRemoveClass()}}/>
              {isEdit && detailInfo.platform == "movies" &&
                <EditMovie detailInfos = {detailInfo}/>
              }
              {isEdit && detailInfo.platform == "games" &&
                <EditGames detailInfos = {detailInfo}/>
              }
          </div>
      </div>
    </div>
    
    <div className="back-info" onClick={() => {
         setPlayPoster(true);
         isMutePoster(); 
         setTrailer(false); 
         setTrailerMuted(true);
         bodyRemoveClass()
      }}>
      <img src={up} alt=""/>
    </div>
  </div>
  )
}
export default MovieDetail;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.

//actions
import {editMovie} from '../actions/movies'
//function component

class EditMovie extends PureComponent {
  render(){  
    return (
      <div>
        <div className="custom-container">
          {this.props.detailInfos.platform == "games" &&  
              <span className="movie-small-title text-white">  Oyun Düzenle </span>
          } 
          {this.props.detailInfos.platform == "movies" &&  
              <span className="movie-small-title text-white">  Film Düzenle </span>
          } 
          <h3 className="mb-4 text-white">{this.props.detailInfos.name}</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="movie-create__form movie d-flex flex-column">
              <div className="movie-create__item d-flex justify-content-between">
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Film Adı</p>
                  <input type="text" onChange={this.handleTextChanged} name="name" value={this.state.name} placeholder="Film Adı"/>
                </div>
                <div className="d-flex flex-column w-100 mr-3">
                    <p>Slug</p>
                    <input type="text" onChange={this.handleTextChanged} name="slug" value={this.state.slug} placeholder="Slug"/>
                </div>
                <div className="d-flex flex-column w-100">
                  <p>Kategori</p>
                  <input type="text" onChange={this.handleTextChanged} name="category" value={this.state.category} placeholder="Kategori"/>
                </div>
              </div>
              <div className="movie-create__item d-flex justify-content-between">
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Puan</p>
                  <input type="text" onChange={this.handleTextChanged} name="point" value={this.state.point} placeholder="Puan" className="mr-0"/>
                </div>
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Poster URL</p>
                  <input type="text" onChange={this.handleTextChanged} name="poster" value={this.state.poster} placeholder="Poster URL"/>
                </div>
                <div className="d-flex flex-column w-100">
                  <p>Müzik URL (Youtube)</p>
                  <input type="text" onChange={this.handleTextChanged} name="music"  value={this.state.music} placeholder="Müzik URL"/>
                </div>
              </div>
              <div className="movie-create__item d-flex justify-content-between">
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Yönetmen</p>
                  <input type="text" onChange={this.handleTextChanged} name="director" value={this.state.director} placeholder="Yönetmen"/>
                </div>
              
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Fragman URL (Youtube)</p>
                  <input type="text" onChange={this.handleTextChanged} className="mr-5" name="trailer" value={this.state.trailer} placeholder="Trailer URL"/>
                </div>
                <div className="d-flex flex-column w-100">
                  <p>Çıkış Tarihi</p>
                  <input type="text" onChange={this.handleTextChanged} name="year" value={this.state.year} placeholder="Çıkış Tarihi" className="mr-0"/>
                </div>
              </div>
              <div className="movie-create__item d-flex justify-content-between">
                <div className="d-flex flex-column w-100">
                  <p>Film Konusu</p>
                  <textarea type="text" rows="4" onChange={this.handleTextChanged} name="title" value={this.state.title} placeholder="Film Detayı"/>
                </div>
              </div>
                <input className="movie-create__button yellow" type="submit" value="Düzenle" />
                {this.props.createResult=="OK" && this.state.message &&
                    <h4 className="text-center status-message yellow"> Film başarılı şekilde güncellendi.</h4>
                }
                {!this.props.createResult=="OK" && this.state.message &&
                    <h4 className="text-center status-message yellow"> Güncelleme sırasında hata oluştu !</h4>
                }
              </div>
            </form>
      </div>
    </div>
    )
  }

  state = { //data
    id: this.props.detailInfos.id,
    name:this.props.detailInfos.name,
    title:this.props.detailInfos.title,
    category:this.props.detailInfos.category,
    slug:this.props.detailInfos.slug,
    poster:this.props.detailInfos.poster,
    music:this.props.detailInfos.music,
    director: this.props.detailInfos.director,
    writer: this.props.detailInfos.writer,
    trailer:this.props.detailInfos.trailer,
    time:this.props.detailInfos.time,
    year:this.props.detailInfos.year,
    point:this.props.detailInfos.point,
    platform: this.props.detailInfos.platform,
    message:true
  }

  handleTextChanged = (e) => { //bunu yazmazsak inputa yazı giremeyiz..
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount(){
    this.setState({message:false})
  }

 handleSubmit = (e) => {
    e.preventDefault();
    this.props.editMovie({
      _id:this.state.id,
      _name:this.state.name,
      _title:this.state.title,
      _category:this.state.category,
      _slug:this.state.slug,
      _poster:this.state.poster,
      _music:this.state.music,
      _director:this.state.director,
      _writer:this.state.writer,
      _trailer:this.state.trailer,
      _time:this.state.time,
      _year:this.state.year,
      _point:this.state.point,
      _platform: this.state.platform
    })
    this.setState({message:true})
    setTimeout(() => {
      this.setState({message:false})
    }, 2000);
  }
}

EditMovie.propTypes = {
  detailInfos: PropTypes.object.isRequired //Function component parametre alma!
};


const mapStateToProps = (state) => { //state => state.games --> games bana rootReducerdan geliyor..
  return {
    createResult: state.games.createGameResult
  } 
}

const mapDispatchToProps = { 
  editMovie
}

export default connect(mapStateToProps,mapDispatchToProps) (EditMovie);

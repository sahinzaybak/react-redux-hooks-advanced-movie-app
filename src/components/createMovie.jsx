import React, {  Component } from 'react'
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.

//Actions
import {saveMovie} from '../actions/movies'

//Class component
class CreateMovie extends Component {
  render(){ 
    return (
      <div>
        <div className="movie-detail__backdrop">
          <img src="https://images.flickreel.com/wp-content/uploads/2016/09/mad-max-fury-road.jpg" loading="lazy"/>
        </div>
        <div className="custom-container">
            <h4 className="mb-3 text-white">Film Ekle</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="movie-create__form movie d-flex flex-column">
                <div className="movie-create__item d-flex justify-content-between">
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Film Adı</p>
                  <input type="text" onChange={this.handleTextChanged} name="name" value={this.state.name} placeholder="Film Adı" required/>
                </div>
                <div className="d-flex flex-column w-100 mr-3">
                  <p>Slug</p>
                  <input type="text" onChange={this.handleTextChanged} name="slug" value={this.state.slug} placeholder="Slug" required />
                </div>
                <div className="d-flex flex-column w-100">
                  <p>Kategori</p>
                  <input type="text" onChange={this.handleTextChanged} name="category" value={this.state.category} placeholder="Kategori" required/>
                </div>
                 
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Puan</p>
                    <input type="text" onChange={this.handleTextChanged} name="point" value={this.state.point} placeholder="Puan"  className="mr-0" required/>
                  </div>
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Poster URL</p>
                    <input type="text" onChange={this.handleTextChanged} name="poster" value={this.state.poster} placeholder="Poster URL" required/>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <p>Müzik URL (Youtube)</p>
                    <input type="text" onChange={this.handleTextChanged} name="music"  value={this.state.music} placeholder="Müzik URL (Youtube)" required/>
                  </div>
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Yönetmen</p>
                    <input type="text" onChange={this.handleTextChanged} name="director" value={this.state.director} placeholder="Yönetmen" required/>
                  </div>
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Senaryo</p>
                   <input type="text" onChange={this.handleTextChanged} name="writer" value={this.state.writer} placeholder="Senaryo" required/>
                  </div>
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Fragman URL </p>
                    <input type="text" onChange={this.handleTextChanged} className="mr-5" name="trailer" value={this.state.trailer} placeholder="Fragman URL (Youtube)" required/>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <p>Film Süresi</p>
                    <input type="text" onChange={this.handleTextChanged} className="mr-0" name="time" value={this.state.time} placeholder="Film Süresi" required/>
                  </div>
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100">
                    <p>Çıkış Tarihi</p>
                    <input type="text" onChange={this.handleTextChanged} name="year" value={this.state.year}placeholder="Çıkış Tarihi" className="mr-0" required/>
                  </div>
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100">
                  <p>Film Konusu</p>
                    <textarea rows="4" type="text" onChange={this.handleTextChanged} name="title" value={this.state.title} placeholder="Film Detayı" required/>
                  </div>
                </div>
                  <input className="movie-create__button yellow" type="submit" value="Kaydet" />
                  {this.props.createResult=="Created" && this.state.message &&
                    <h4 className="text-center status-message yellow"> Yeni film girildi.</h4>
                  }
                  {!this.props.createResult=="Created" && this.state.message &&
                    <h4 className="text-center status-message"> Film ekleme sırasında hata oluştu !</h4>
                  }
                </div>
            </form>
        </div>
      </div>
    )
  }

  state = {
    name:'',
    title:'',
    category:'',
    slug:'',
    poster:'',
    director: '',
    writer: '',
    trailer:'',
    music:'',
    time:'',
    year:'',
    point:'',
    message:true
  }

  componentDidMount(){
    this.setState({message:false})
  }

  handleTextChanged = (e) => { //bunu yazmazsak inputa yazı giremeyiz..
    this.setState({ [e.target.name]: e.target.value });
  }

 handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveMovie({
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
    });
    this.setState({message:true})
    setTimeout(() => {
      this.setState({message:false})
    }, 2000);
  }
}

const mapStateToProps = (state) => {
  return {
    createResult: state.movies.createMovieResult
  } 
}

const mapDispatchToProps = {
  saveMovie,
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateMovie);

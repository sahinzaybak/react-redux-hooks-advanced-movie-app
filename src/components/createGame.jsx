import React, {  Component } from 'react'
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.

//Actions
import {saveGames} from '../actions/games'

//Class component
class CreateGame extends Component {
  render(){ 
    return (
      <div>
        <div className="movie-detail__backdrop">
          <img src="https://i.pinimg.com/originals/22/b7/fb/22b7fba1a4fdc53a0307df966146dc2d.jpg" loading="lazy"/>
        </div>
        <div className="custom-container">
            <h4 className="mb-3 text-white">Oyun Ekle</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="movie-create__form d-flex flex-column">
                <div className="movie-create__item  d-flex justify-content-between">
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Oyun Adı</p>
                    <input className="mr-3" type="text" onChange={this.handleTextChanged} name="name" value={this.state.name} placeholder="Oyun Adı" required/>
                  </div>
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Slug</p>
                    <input className="mr-3"  type="text" onChange={this.handleTextChanged} name="slug" value={this.state.slug} placeholder="Slug" required/>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <p>Kategori</p>
                    <input type="text" onChange={this.handleTextChanged} name="category" value={this.state.category} placeholder="Kategori"/>
                  </div>
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Poster URL</p>
                    <input className="mr-3"  type="text" onChange={this.handleTextChanged} name="poster" value={this.state.poster} placeholder="Poster URL" required/>
                  </div>
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Müzik URL (Youtube)</p>
                    <input className="mr-3" type="text" onChange={this.handleTextChanged} name="music"  value={this.state.music} placeholder="Müzik URL (Youtube)" required/>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <p>Puan</p>
                    <input type="text" onChange={this.handleTextChanged} name="point" value={this.state.point} placeholder="Puan" className="mr-0" required/>
                  </div>
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Oyun Firması</p>
                    <input className="mr-3"  type="text" onChange={this.handleTextChanged} name="company" value={this.state.company} placeholder="Şirket" required/>
                  </div>
                  <div className="d-flex flex-column w-100 mr-3">
                    <p>Fragman URL (Youtube)</p>
                    <input className="mr-3"  type="text" onChange={this.handleTextChanged} name="trailer" value={this.state.trailer} placeholder="Trailer URL" required/>
                  </div>
                  <div className="d-flex flex-column w-100">
                    <p>Oyun Süresi</p>
                    <input type="text" onChange={this.handleTextChanged} name="time" value={this.state.time} placeholder="Oyun Süresi"/>
                  </div>
                </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100">
                    <p>Çıkış Yılı</p>
                    <input type="text" onChange={this.handleTextChanged} name="year" value={this.state.year}placeholder="Çıkış Yılı" className="mr-0" required/>
                    </div>
                  </div>
                <div className="movie-create__item d-flex justify-content-between">
                  <div className="d-flex flex-column w-100">
                    <p>Oyun Konusu</p>
                    <textarea rows="4" type="text" onChange={this.handleTextChanged} name="title" value={this.state.title} placeholder="Oyun Detayı" required/>
                  </div>
                </div>
                  <input className="movie-create__button" type="submit" value="Kaydet" />
                  {this.props.createResult=="Created" && this.state.message &&
                    <h4 className="text-center status-message"> Yeni oyun girildi.</h4>
                  }
                  {!this.props.createResult=="Created" && this.state.message &&
                    <h4 className="text-center status-message"> Oyun ekleme sırasında hata oluştu !</h4>
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
    music:'',
    company:'',
    trailer:'',
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
    this.props.saveGames({
      _name:this.state.name,
      _title:this.state.title,
      _category:this.state.category,
      _slug:this.state.slug,
      _poster:this.state.poster,
      _music:this.state.music,
      _company:this.state.company,
      _trailer:this.state.trailer,
      _time:this.state.time,
      _year:this.state.year,
      _point:this.state.point
    });
    this.setState({message:true})
    setTimeout(() => {
      this.setState({message:false})
    }, 2000);
  }
  
}

const mapStateToProps = (state) => { 
  return {
    createResult: state.games.createGameResult
  } 
}

const mapDispatchToProps = {
  saveGames,
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateGame);

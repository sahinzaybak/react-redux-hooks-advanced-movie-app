import React, { PureComponent } from 'react'

//Components
import CreateGame from '../components/createGame'
import CreateMovie from '../components/createMovie'

//Class component
class productCreate extends PureComponent {
  render() {
    return (
      <div className="movie-create page pt-4">
      {this.props.match.params.platform == "game" && 
          <CreateGame />
      }
       {this.props.match.params.platform == "movie" && 
          <CreateMovie />
       }
      </div>
    )
  }
    //header arka plan rengi kaldırmak için..
    componentWillMount(){ //component yükleniyorken
      document.body.classList.add("header-nobg");
      
    }
    componentWillUnmount(){ //component çıkılıyorken
      document.body.classList.remove("header-nobg");
    }
}

export default productCreate;

import React, { PureComponent } from 'react'
//Components
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.
import EditGame from '../components/editGame'
import EditMovie from '../components/editMovie'
import {detail} from '../actions/games'

//Class component
class productEdit extends PureComponent {
  render() {
    return (
      <div className="movie-create edit pt-5">
        {this.props.detailInfo.platform=="games" && 
          <EditGame detailInfo= {this.props.detailInfo}/>
        }

        {this.props.detailInfo.platform=="movies" && 
          <EditMovie detailInfo= {this.props.detailInfo}/>
        }
      </div>
    )
  }
 
  componentDidMount(){ //Created
    document.body.classList.add("header-nobg");
    const platform = this.props.match.params.platform //params platform
    const slug = this.props.match.params.slug //params id
    this.props.detail(platform,slug); //actiona gameId ve platform adı gönderdik.
 }
}

const mapStateToProps = (state) => { //state => state.games --> games bana rootReducerdan geliyor..
  return {
    detailInfo: state.games.detail
  } 
}

const mapDispatchToProps = {
  detail
}

export default connect(mapStateToProps,mapDispatchToProps) (productEdit);


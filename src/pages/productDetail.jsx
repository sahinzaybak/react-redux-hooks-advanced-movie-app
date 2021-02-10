import React, { PureComponent } from 'react'
import {connect} from 'react-redux' //redux ile bağlantı kurmak için connect gerekli.
//Component
import Detail from '../components/detail.jsx'
//Actions
import {detail} from '../actions/games';

class productDetail extends PureComponent {
  render() {
    return (
      <div className="movie-detail">
        <Detail detailInfo={this.props.detailInfo} />
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

   componentDidMount(){ //Created
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

const mapDispatchToProps = { //this.props.getGameDetail(); propsta tanımlayıp kullanabilmem için props tanımlamamız gerekiyor.
  detail
}

export default connect(mapStateToProps,mapDispatchToProps) (productDetail);

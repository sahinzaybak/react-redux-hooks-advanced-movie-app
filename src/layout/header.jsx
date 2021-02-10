import React, { PureComponent } from 'react'
import '../assets/scss/layout/header.scss'
import logo from '../assets/images/logo.png';
//Components
import Search from '../components/search.jsx'

class header extends PureComponent {
  state = {
    isDark:false
  }
  toggleSwitch = () => { 
    this.setState({isDark: !this.state.isDark})
    if(!this.state.isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }

  render() {
    return (
      <div className="header sticky-top">
        <div className="custom-container h-100">
          <div className="d-flex justify-content-between h-100">
              <div className="header-logo d-none d-md-flex align-items-center">
                <img className="header-logo" src={logo} />
              </div>
              <div className="header-menu__search ml-0 ml-md-5">
                <Search />
              </div>
              <div className="header-menu d-flex align-items-center">
                <a className="header-menu__link d-none d-md-block" href="#">Anasayfa</a>
                <a className="header-menu__link  d-none d-md-block" href="#">Hakkımda</a>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" checked={this.state.isLight} id="customSwitch1"/>
                  <label className="custom-control-label" htmlFor="customSwitch1" onClick={this.toggleSwitch}>Dark Mode</label>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default header;

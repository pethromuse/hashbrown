import React, { Component } from 'react';
import Scroll from 'react-scroll';


let Link = Scroll.Link;

class NavBar extends Component {
 
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {    
   let menuButton = document.getElementById('menu-button');  
   menuButton.style.display = 'none';      
  }

  /*20200706 Navbar test */
  handleDelActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.remove('active');
  };

  handleSetActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.add('active');
  };
 
  render() { 
    return (
      <div>
        
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container">
            <div className="nav-items col-md-6 col-xs-12" id="navbarSupportedContent">
              <ul className="navbar-nav web-env-nav-bar">                
              <div className="navbar-innder">
                <li className="nav-item active" id="first-item">
                  <Link activeClass="active" className="nav-link" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  Home
                  </Link>
                </li>
                <li className="nav-item active" id="first-item">
                  <Link activeClass="active" className="nav-link" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Mood" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    ASP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Bond" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Subway
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Mood" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Kalisco
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Career" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Email
                  </Link>
                </li>
                </div>
              </ul>
              <div className="navbar-nav mobile-env-nav-bar">
              <i className="fas fa-align-justify menu-button" onClick={this.handleClick} id="menu-button"></i> 
              <ul className="navbar-nav-small ">                
              <div className="navbar-innder">
                <li className="nav-item active" id="first-item">
                  <Link activeClass="active" className="nav-link" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  Home
                  </Link>
                </li>
                <li className="nav-item active" id="first-item">
                  <Link activeClass="active" className="nav-link" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Mood" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    ASP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Bond" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Subway
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Mood" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Kalisco
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Career" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Email
                  </Link>
                </li>
                </div>
              </ul>             
              </div>
             
            </div>
          </div>
        </nav>
     
      </div>
    )
  }
}

export default NavBar;
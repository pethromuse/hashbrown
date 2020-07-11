import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

class NavBar extends Component {

  /*20200706 Navbar test */
  handleDelActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.remove('active');
  }

  handleSetActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.add('active');
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container">
            <div className="nav-items col-md-6 col-xs-12" id="navbarSupportedContent">
              <ul className="navbar-nav">
              
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
              </ul>
            </div>
          </div>
        </nav>
     
      </div>
    )
  }
}

export default NavBar;
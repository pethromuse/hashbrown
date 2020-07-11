import React, { Component } from 'react';
import NavBar from './component/nav_bar';
import HeaderInfo from './component/header_info';
import MainProject1 from './component/main_project1';
import MainProject2 from './component/main_project2';
import MainProject3 from './component/main_project3';
import MainCareer from './component/main_career';
import FooterContact from './component/footer_contact';
import profileImage from './img/mypicture.jpg'
import logo from './logo.svg';
import Scroll from 'react-scroll';
import './App.css';



let Element = Scroll.Element;

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Element name="hello" className="element header-info-bg">
          <HeaderInfo />
        </Element>
        <Element name="Bond" className="element main-project-bg">
          <MainProject1 />
        </Element>
        <Element name="Mood" className="element main-project-bg">
          <MainProject2 />
        </Element>
        <Element name="Mood" className="element main-project-bg">
          <MainProject3 />
        </Element>
        <Element name="Contact" className="element contact-bg">
          <FooterContact />
        </Element>
      </div>
    );
  }
}
/*function App() extends Component {
  return (
    <div className="App">
      <h1>My React Appㅎㅎㅎ</h1>
      <h2>이름 : 정대혁</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}*/

export default App;

import React from 'react';
import profileImage from './img/mypicture.jpg'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React Appㅎㅎㅎ</h1>
      <h2>이름 : 정대혁</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;

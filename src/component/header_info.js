import React, { Component } from 'react';
import background from '../img/header-background-img.jpg';
import '../css/header_info.css';

class HeaderInfo extends Component {  
  render() {
    let content = "정대혁의 포트폴리오에 오신것을 환영합니다~";
    let tempWord = "";
    let result = "";
    let index = 0;
      var tyInt = setInterval(typing,200); 

      
      function typing(){         
        if(content.length > 0 ){ 
          tempWord = content[index];
          content = content.substring(1, content.length); 
          result += tempWord;
          document.getElementById('typing-effect').innerHTML = result;          
        } else{ 
          clearInterval(tyInt); //끝나면 반복종료 
        } 
      }
    return (
      <header className="header-info" style={{ backgroundImage : `url(${background})` }}>
        <div className="jumbotron header-bg">
          <div className="container">
            <div className="header-content-wrapper row">
              <div className="col">     
                      
              </div>
              <div className="bg-wrapper">
                <p className="header-content-text lead" id="typing-effect">
                  LOGO    <br />
                  </p>                
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderInfo;
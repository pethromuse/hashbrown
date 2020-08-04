import React, { Component } from 'react';
import asp1 from '../img/asp1.png'
import asp2 from '../img/asp2.png'
import asp3 from '../img/asp3.png'
import '../css/main_projects.css'

class MainProject1 extends Component {
  render() {
    setInterval(function imageChange(activeImg){
      let list = document.getElementsByClassName('img-asp');
      let changed = false;
      let i = 0;
      while(!changed){        
        if(list[i].className.match("hidden") == null){
          list[i].setAttribute('class','img-asp asp-hidden');
          if(i === list.length-1){
            list[0].setAttribute('class','img-asp asp-display');
          }else{
            list[i+1].setAttribute('class','img-asp asp-display');
          }
          changed = true;
        }
        i++;
      }
    }, 2000);
    return (
      <section className="main-project">
        <div className="jumbotron project-bg">
          <div className="container">
            <div className="title-wrapper">
              <h1 className="project-title">
                ASP(Application Service Provider)
              </h1>
              <p className="sub-text">스프링부트 기반 경영지원시스템</p>
            </div>
            <div className="content-wrapper row">
              <div className="col-md-6 image-frame">                
              <img className="img-asp2 asp2-display" src={asp1} alt="asp1" id="asp1"></img>
              <img className="img-asp2 asp2-hidden" src={asp2} alt="asp2" id="asp2"></img>
              <img className="img-asp2 asp2-hidden" src={asp3} alt="asp3" id="asp3"></img>                
              </div>
              <div className="col-md-6">
                <ul className="info">
                  <li className="info-list">
                    <h4 className="content-title">경영지원시스템</h4>
                    <ul className="content-text">
                      <li>스프링 프레임워크를 이용하여 해외유명 외식업체 매출/통계/판매/인력/식자재 관리시스템</li>
                    </ul>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">주요 기능</h4>
                    <p className="content-text">Session기반 로그인 관리기능, 데이터 저장 및 수정, Java-Batch를 이용한 통계생성, 물류시스템과 API인터페이스, 엑셀 내려받기 기능, 해외본사에 매출전송기능 등등..</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">사용언어 및 기술</h4>
                    <p className="content-text">HTML, CSS, Javascript(Jquery), Java, Mybatis, Oracle</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">업무</h4>
                    <p className="content-text">화면설계 및 개발, API 개발, 쿼리작성, 통계생성 프로그램 개발, 유지보수</p>
                  </li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
      </section>

     
    )
  }
}

export default MainProject1;
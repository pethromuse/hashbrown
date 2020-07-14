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
              <img className="img-asp asp-display" src={asp1} alt="asp1" id="asp1"></img>
              <img className="img-asp asp-hidden" src={asp2} alt="asp2" id="asp2"></img>
              <img className="img-asp asp-hidden" src={asp3} alt="asp3" id="asp3"></img>                
              </div>
              <div className="col-md-6">
                <ul className="info">
                  <li className="info-list">
                    <h4 className="content-title">경영지원시스템</h4>
                    <ul className="content-text">
                      <li>회계시스템과 자동인터페이스를 기반으로
                         고객사의 기간서버와 연동 다양한 웹조회와 통계자료를 제공합니다.
                         타 회계프로그램과 연계 업무적용이 가능하며 자재/판매/인원/통계 등의 다양한 서비스를 제공
                         </li>
                    </ul>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">주요 기능</h4>
                    <p className="content-text">Session기반 로그인 관리기능, 데이터 저장 및 수정, 통계생성 및 분석, 외부시스템과 API인터페이스, 이미지 업로드 및 내려받기(AWS S3와 연동)</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">사용언어 및 기술</h4>
                    <p className="content-text">HTML, CSS, Javascript(Jquery), Java, Mybatis, MSSQL</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">업무</h4>
                    <p className="content-text">화면설계 및 개발, API 개발, 매출조회 및 통계생성 쿼리 및 프로시저 작성, 유지보수</p>
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
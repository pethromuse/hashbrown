import React, { Component } from 'react';

class FooterContact extends Component {
  render() {
    return (
      <footer className="footer-contact">
        <div className="jumbotron footer-bg">
          <div className="container">
            <div className="footer-content-wrapper row">
              <div className="col">
                <h1 className="contact-title">Contact</h1>
                <div className="media">
                  <div className="media-left">
                    <img className="mr-3 profile-img" alt="프로필 이미지" src="/favicon.ico" />
                  </div>
                  <div className="media-body">
                    <h5 className="mt-0 media-heading" >
                    안녕하세요! 개발자 정대혁입니다.
                    </h5>
                    <dl className="row">
                      <dt className="col-sm-2">Skills </dt>
                      <dd className="col-sm-10 content-text">
                        <code>HTML5</code> <code>CSS3</code> <code>Sass/Scss</code> <code>JavaScript</code> <code>Vue.js</code> <code>React</code> <code>jQuery</code> <code>photoshop</code> <code>illustrator</code> <code>...</code> 
                      </dd>

                      <dt className="col-sm-2">Email </dt>
                      <dd className="col-sm-10 content-text">
                        <p><a className="contact-link" href="pethromuse@gmail.com">pethromuse@gmail.com</a></p>
                      </dd>                      
                    </dl>
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </footer>

     
    )
  }
  

 
}

export default FooterContact;
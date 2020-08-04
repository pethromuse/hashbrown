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
                  
                  <div className="media-body">
                    <h5 className="mt-0 media-heading" >
                    안녕하세요! 개발자 정대혁입니다.
                    </h5>
                    <dl className="row">
                      <dt className="col-sm-2"> </dt>
                      <dd className="col-sm-10 content-text">
                        <code>HTML5</code> <code>CSS3</code> <code>Sass/Scss</code> <code>JavaScript</code><code>React</code> <code>jQuery</code> <code>Java/Spring</code> <code>Mybatis</code> <code>Oracle</code> <code>MSSQL</code> <code>...</code> 
                      </dd>

                      <dt className="col-sm-2"> </dt>
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
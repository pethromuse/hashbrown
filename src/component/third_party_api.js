import React, { Component } from 'react';

class third_party_api extends Component {
    render(){
        function load(url) {
            return new Promise(function(resolve, reject) {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = url;
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            })
          };
          
          load('https://kit.fontawesome.com/7fb65a5250.js')
            .then(function() {
              console.log('Loaded!');
            })
            .catch(function(err) {
              console.error('Something went wrong!', err);
            });
            return (
              <div></div>
            )
    }
}

export default third_party_api;
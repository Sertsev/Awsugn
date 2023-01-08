import React, { Component } from 'react';
import logo from './logo.svg';
import facebook from './social-icons/facebook.svg';
import tiktok from './social-icons/tiktok.svg';
import youtube from './social-icons/youtube.svg';
import telegram from './social-icons/telegram.svg';
import instagram from './social-icons/instagram.svg';
import Subscribe from './Subscribe.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-side">
          <img src={logo} className="App-logo" alt="logo" />
          <p>AWSUGN is a renting platform powered by ASA Technologies. Started as a way of solving the inconvenient and unorganized renting market of clothes, it relieves customers from the tiresome process of searching for clothes by providing an online platform that allows choosing and book clothes at the tip of their fingers. We are working very hard to launch our website. </p>
          <br />
          <pre> Please follow us on: </pre>
          <div className='social-links'>
            <a href="https://t.me/s/awsugn" ><img src={telegram} className="App-logo" alt="telegram-logo" width="50px" /></a>
            <a href="https://instagram.com/awsugn" ><img src={instagram} className="App-logo" alt="instagram-logo" width="50px" /></a>
            <a href="https://facebook.com/awsugn" className="fa fa-twitter"><img src={facebook} className="App-logo" alt="facebook-logo" width="50px" /></a>
            <a href="https://www.tiktok.com/@awsugn" className="fa fa-twitter"><img src={tiktok} className="App-logo" alt="tiktok-logo" width="50px" /></a>
            <a href="https://www.youtube.com/@awsugn" className="fa fa-twitter"><img src={youtube} className="App-logo" alt="youtube-logo" width="50px" /></a>
          </div>
          <div className='subscribe'>
            <p> To get notified please leave your contact </p>
            <Subscribe />
          </div>
        </div>
        <div className='right-side'>
          {/* <SocialMediaTabs /> */}
        </div>
      </div>
    );
  }
}

export default App;


import React from "react";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


var hist = createBrowserHistory();

ReactDOM.render(

  <Router history={hist}>

    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
    <Snowfall />
    {/* <div className="bgm">
      <audio src="assets/bgm.mp3" controls>
    </div> */}

    
    <ReactAudioPlayer
      src={Storage.get('bgm.mp3')}
      // src={require("bgm.mp3")}
      controls
      autoPlay
      loop
      crossOrigin="anonymous"
    />,
  </Router>,
    
  document.getElementById("root")
);

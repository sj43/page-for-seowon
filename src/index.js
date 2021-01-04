import React from "react";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import "assets/scss/material-kit-react.scss?v=1.9.0";
// import bgm from "assets/bgm.mp3";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

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
    <ReactAudioPlayer
    src={require("assets/bgm.mp3")}
    autoPlay
    controls
    loop
    volume={0.8}
  />,
  </Router>,
    
  document.getElementById("root")
);

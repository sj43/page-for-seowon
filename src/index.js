
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

// import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);


var hist = createBrowserHistory();


// const bgm = await Storage.get('bgm.mp3');
// export function downloadBlob(blob, filename) {
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = filename || 'download';
//   const clickHandler = () => {
//     setTimeout(() => {
//       URL.revokeObjectURL(url);
//       a.removeEventListener('click', clickHandler);
//     }, 150);
//   };
//   a.addEventListener('click', clickHandler, false);
//   a.click();
//   return a;
// }

// // usage
// Storage.get(fileKey, { download: true })
//         .then(res => downloadBlob(res.Body, downloadFileName)) // derive downloadFileName from fileKey if you wish
// copy



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
      // src={bgm}
      // src={require("bgm.mp3")}
      // src={"s3://pageforseowon157a9bedba8647de9bb3b81b5b2f349b235658-dev/bgm.mp3"}
      src={"https://pageforseowon157a9bedba8647de9bb3b81b5b2f349b235658-dev.s3.amazonaws.com/bgm.mp3"}
      controls
      autoPlay
      loop
      crossOrigin="anonymous"
    />,
  </Router>,
    
  document.getElementById("root")
);

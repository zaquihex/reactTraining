import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Contador from "./containers/Contador";
import { ButtonGeneral } from './components/Buttons';

function App() {

  return (
      <div id="main">
        <a className="header" href="https://github.blog/2020-04-15-npm-has-joined-github/">
            <span className="headerStrong">NPM&nbsp;</span>
            <span>is now a part of &nbsp;</span>
            <span className="headerStrong">Github</span>
        </a>
        
          <Contador />
  </div>);
}

export default App;





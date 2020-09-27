import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function crearUsuario() {

}

function App() {
  let mensaje = "usuario básico";


  const esAdmin= "si";

  if(esAdmin === "si") {
    mensaje = "   is now a part of    ";
  }

  return (
      <div id="main">
        <a className="header" href="https://github.blog/2020-04-15-npm-has-joined-github/">
            <span className="headerStrong">npm&nbsp;</span>
            <span>is now a part of &nbsp;</span>
            <span className="headerStrong">Github</span>
        </a>
  </div>);
}

export default App;





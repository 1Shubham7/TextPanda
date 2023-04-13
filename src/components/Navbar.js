import React from 'react'
import {useState} from 'react';

export default function Navbar(props) {


  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
  <a className="navbar-brand" href="/">{props.xxx}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/shubham-singh-mahar-5a002b20b/">LinkedIn</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/1Shubham7" tabIndex="-1">GitHub</a>
      </li>
      </ul>
      <div className={`'form-check form-switch text-dark'`}>
        <input className="form-check-input" type="checkbox" role="switch"  onClick={props.toggleMode} id="flexSwitchCheckDefault" />
        <label className="form-check-label"  for="flexSwitchCheckDefault" style={props.myStyle} ><b>Enable Dark Mode</b></label>
      </div>


{/* {`form-check form-text-${props.mode==='light'?'light':'dark'}`} */}
{/* style={{color: 'green'}} */}


    </div>
  </div>
</nav>
</>)
}

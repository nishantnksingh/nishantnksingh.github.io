
import './App.css';

import React, {Component, useState} from "react";
import ReactDOM from "react-dom";



function App() {
  function buttonclicked() {
    ReactDOM.render(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>,document.getElementById("showpara"));
  }
  return (
    <div id="main">
      <button id="click" onClick={()=>buttonclicked()}>Click</button>
      <div id="showpara"></div>
    </div>
  );
}
export default App;

import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import "./../styles/App.css";


function App() {
  function buttonclicked() {
    ReactDOM.render(<p>Hello this is paragraph</p>,document.getElementById("showpara"));
  }
  return (
    <div id="main">
      <button id="click" onClick={()=>buttonclicked()}>Click</button>
      <div id="showpara"></div>
    </div>
  );
}


export default App;

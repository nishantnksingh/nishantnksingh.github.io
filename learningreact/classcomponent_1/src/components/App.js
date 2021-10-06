import React, {Component, useState} from "react";
import '../styles/App.css';
import Para from "./components/paragraph";

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				<button id="click"></button>
    		</div>
    	);
    }
	
}
export default App;


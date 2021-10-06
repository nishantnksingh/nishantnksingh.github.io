import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import '../styles/App.css';


class App extends Component {
    constructor(props) {
		super(props);
		
	};
	printpara() {
		ReactDOM.render(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>, document.getElementById("root"));
	}

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.printpara}>Submit</button>
    		</div>
    	);
    }
	
	
}

console.log("app js working");
ReactDOM.render(<App />, document.getElementById("root"));
export default App;


import { ReactWrapper } from "enzyme";
import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import '../styles/App.css';
import para from './para';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';



class App extends Component {
    constructor(props) {
		super(props);
		
	};

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={ReactDOM.render(<para />,document.getElementById('root'))}>Click</button>
    		</div>
    	);
    }
	
	
}

export default App;


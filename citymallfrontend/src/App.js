'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Table} from './Table';

function App(){
    return(
        <div style={{ display:'flex',
        alignItems:'center'}}>
            <Table />
        </div>
    )
}
export default App;

//render(<GridExample></GridExample>, document.querySelector('#root'));
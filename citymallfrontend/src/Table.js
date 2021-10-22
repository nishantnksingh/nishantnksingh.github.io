import React, { useState } from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import deleteimg from './trash.png';
import { gridApi } from 'ag-grid-community';
import $ from 'jquery'
import Datepicker from "react-datepicker";
import './App.css'
import "react-datepicker/dist/react-datepicker.css";


export const Table=()=>{
    const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
  
 

    const checkempty=(params)=>{
        if(params==""){
            return true;
        }
        else return false;
    }
    const checktwochar=(params)=>{
        var re = /\S+@\S+\.\S+/;
       
        if(params.length<2){
            console.log(params.length);
            return true;  
        }
        else if(!re.test(params)){
            return true;
        }
        else{
            console.log(params.length);
            return false;
           
        }
    }
    
 

    const columns=[
        {headerName:"ID", field:"id",checkboxSelection:true,cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:{background:"white"})},
        {headerName:"Name",field:"name",cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:{background:"white"})},
        {headerName:"Email",field:"email",cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:((checktwochar(params.value))?{background:"yellow"}:{background:"white"}))},
        {headerName:"Gender", field:"gender",cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:{background:"white"})},
        {headerName:"DOB",field:"dob", cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:{background:"white"}) },
        {headerName:"Country",field:"country",cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:{background:"white"})},
        {headerName:"City",field:"city",cellStyle:(params)=>((checkempty(params.value))?{background:"red"}:{background:"white"})},
        {headerName:"Action",field:"action",editable:false, cellRendererFramework:(params)=><div><img src={deleteimg} height="15px"  onClick={()=>checkempty(params.value)}/></div>}
    ]
    const defaultColDef={
        editable:true,filter:true,sortable:true,flex:1
    }
    const data=[
        {
            "id":1,"name":"Janie",
             "email":"jclampton0@over-blog.com",
             "gender":"Female",
             "dob":"03-07-1998",
             "country":"Indonesia",
             "city":"Klatakan",
             "action":"Action"
        },
        {
            "id":2,"name":"Kassie",
             "email":"ksimonyi1@lashdot.org",
             "gender":"Female",
             "dob":"24-12-1997",
             "country":"Russia",
             "city":"Sasovo",
             "action":"Action"
        },
        {
            "id":3,"name":"Homerus",
             "email":"hivanenkov2@163@slashdot.org",
             "gender":"Male",
             "dob":"24-12-1998",
             "country":"Ukraine",
             "city":"Leviv",
             "action":"Action"
        }
    ]


    const columns2=[
        {headerName:"ID", field:"id"},
        {headerName:"Name",field:"name"},
        {headerName:"Email",field:"email"},
        {headerName:"Gender", field:"gender"},
        {headerName:"DOB",field:"dob"},
        {headerName:"Country",field:"country"},
        {headerName:"City",field:"city"},  
    ]
    const data2=[
    ]
    const defaultColDef2={
        editable:false,flex:1
    }
    const onRemoveSelected = () => {
        const selectedData = gridApi.getSelectedRows();
        const res = gridApi.applyTransaction({ remove: selectedData });
       
      };
   


    return(
    <div className="ag-theme-alpine"
    style={{height:'280px',
    width:'1200px',
    margin:'0px auto'
   }}>
        <button className="btnstyle" onClick={()=>gridApi.applyTransaction({add:[{}]})}>Add Row</button>
        <button className="btnstyle" onClick={() => onRemoveSelected()}>Delete Selected Rows</button>
        <button className="btnstyle" onClick={() => onRemoveSelected()}>Delete Non Selected Rows</button>
        <button className="btnstyle" onClick={() => onRemoveSelected()}>Submit</button>
        
        <AgGridReact 
        rowData={data} 
        columnDefs={columns} 
        defaultColDef={defaultColDef}
        rowSelection={'multiple'}
                groupSelectsChildren={true}
                groupSelectsFiltered={true}
                suppressAggFuncInHeader={true}
                suppressRowClickSelection={true}
                onGridReady={onGridReady}
                stopEditingWhenGridLosesFocus={true}
                animateRows={true}
                singleClickEdit={true}
                />
        <h3>Submitted Data</h3>
        <AgGridReact rowData={data2} 
        columnDefs={columns2} 
        defaultColDef={defaultColDef2}
        />
    </div>)

}
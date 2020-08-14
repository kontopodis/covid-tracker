import React,{useState} from 'react'
import './dataview.css'
import 'react-data-grid/dist/react-data-grid.css';

import ReactDataGrid from "react-data-grid";
function DataView({Rows}){


   

       if (Rows !== undefined || Rows !== null || Rows !== 0){
        
         return(
          <div className='data-view'>
         <ReactDataGrid columns={columns} rows={Rows} rowsCount={Rows.length}/>
          <div className="empty-space"/>
          </div>
          )
       }

            



}


  const columns = [

    {
      key: "country",
      name: "Country",
   
    },
    {
      key: "province",
      name: "Province",
   
    },
    {
      key: "confirmed",
      name: "Confirmed",
    
    },
    {
      key: "active",
      name: "Active",
    
    },
    {
      key: "recovered",
      name: "Recovered",
     
    },
    {
      key: "fatality_rate",
      name: "Fatality Rate"
    }
  ]
  

export default DataView;

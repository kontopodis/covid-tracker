import React,{useState} from 'react'
import '../App.css'
function About({data}){


return (
    <div className='about'>
<div className="contributions">
     Data reports by: <br/>
   <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank" rel="noopener noreferrer">
   "COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University"
   </a>
   <br/>Servered by:<br/>
   <a href="https://covid-api.com/" target="_blank" rel="noopener noreferrer">Covid-API: https://covid-api.com/</a>
   <br/>
   Thanks to: <a href="https://axisbits.com/" target="_blank" rel="noopener noreferrer">https://axisbits.com/</a><br/>
   Front-end made by: Kontopodis Emmanouil<br/>
   Just for fun! And to learn React, Javascript, Data-Grids<br/>
   Source Code for Front-end on <a href="https://github.com/kontopodis/covid-tracker" target="_blank" rel="noopener noreferrer">GitHub</a><br/>
   </div>
        <div className="empty-space"/>
        </div>
           
)

}
export default About;

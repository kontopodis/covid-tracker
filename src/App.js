import React,{useState} from 'react';
import Home from './components/home';
import DataView from './components/dataview.js';
import Disclaimer from './components/disclaimer.js';
import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
function App() {
  var [AllReports, setAllReports] = useState(0);
  var [GlobalData, setGlobalData] = useState(0);
  var [DidLoad,setDidLoad] = useState(false);
  var DidLoadThen = DidLoad;




  if (DidLoadThen === false){

     
    
          axios.get("https://covid-api.com/api/reports/")
         .then(result=>{

           let allres=result.data.data.map((res)=>{
             return({
               confirmed:res.confirmed,
               active:res.active,
               recovered:res.recovered,
               deaths:res.deaths,
               fatality_rate:res.fatality_rate,
               country:res.region.name,
               province:res.region.province
             })
           })
             setAllReports(allres)           
          })
          .catch(result=>{
          })   

          axios.get("https://covid-api.com/api/reports/total")
          .then(result=>{
            let GDATA = {
                Confirmed: numberWithCommas(result.data.data.confirmed),
                Deaths:numberWithCommas(result.data.data.deaths),
                Recovered:numberWithCommas(result.data.data.recovered),
                Active:numberWithCommas(result.data.data.active),
                Fatality:result.data.data.fatality_rate
            }
            setGlobalData(GDATA);      
           })
           .catch(result=>{
           }) 

          DidLoadThen = true;
          setDidLoad(true);       
  }

  return (
    <div className="App">


<Router basename="/webapps/covid-tracker/">   
    <div className="menu">    
      <Link to='/global' className="menu-item">Global</Link>
      <Link to='/allreports' className="menu-item">All Reports</Link>
      <Link to='/' className="menu-item">Disclaimer</Link>

 
    </div>    
    
    
   <Switch>
   <Route exact="/" path='/'><Disclaimer/></Route>
     <Route path='/global'>
     {()=>{
       if (DidLoad === true){
         return(<Home data={GlobalData}/>)
       }
     }}
     </Route>
     <Route path='/allreports'>{()=>{
       if (DidLoad === true){
         return(<DataView Rows={AllReports}/>)
       }
     }}</Route>

     
   </Switch>
   </Router>
   
    </div>
  );
}
let numberWithCommas=(x)=> {
  var parts = x.toString().split(".");
  parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return parts.join(",");
  }
export default App;

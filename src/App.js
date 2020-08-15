import React,{useState} from 'react';
import Home from './components/home'
import DataView from './components/dataview.js'
import Disclaimer from './components/disclaimer.js'
import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios'
function App() {
  var [AllReports, setAllReports] = useState(0);
  var [GlobalData, setGlobalData] = useState(0);
  var [DeseaseOutbreak,setDeseaseOutbreak] = useState(0);
  var [DidLoad,setDidLoad] = useState(false);
  var DidLoadThen = DidLoad;




  if (DidLoadThen === false){
     console.log("IF EXECUTED IN APP")
     DidLoadThen = true;
     setDidLoad(true); 
     
    
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
              console.log("RESULT CAME BACK ",allres);
          })
          .catch(result=>{
              console.log("ERROR ON CATCH ",result)
              setDidLoad = true;
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
               console.log("RESULT CAME BACK GLOBAL DATA", GDATA);
           })
           .catch(result=>{
               console.log("ERROR ON CATCH GLOBAL DATA",result)
               setDidLoad = true;
           }) 


      
  }

  return (
    <div className="App">


<Router basename="/webapps/covid-tracker/">   
    <div className="menu">    
      <Link to='/global' className="menu-item">Global</Link>
      <Link to='/allreports' className="menu-item">All Reports</Link>
      <Link exact to='/' className="menu-item">Disclaimer</Link>

 
    </div>    
   
    
   <Switch>
     <Route path='/global'>
     {()=>{
       if (GlobalData === undefined || GlobalData === null || GlobalData === 0){}else{
         return(<Home data={GlobalData}/>)
       }
     }}
     </Route>
     <Route path='/allreports'>{()=>{
       if (AllReports === undefined || AllReports === null || AllReports === 0){}else{
         return(<DataView Rows={AllReports}/>)
       }
     }}</Route>
     <Route path='/'><Disclaimer/></Route>
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

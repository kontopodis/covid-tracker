import React from 'react';
import Home from './components/home'
import DataView from './components/dataview.js'
import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Router basename="/webapps/covid-tracker/">   
    <div className="menu">    
      <Link to='/' className="menu-item">Global</Link>
      <Link to='/greece' className="menu-item">Greece</Link>
      <Link to='/usa' className="menu-item">USA</Link>
 
    </div>    
   
    
   <Switch>
     <Route exact path='/'><Home/></Route>
     <Route path='/greece'><DataView url="https://covid-api.com/api/reports/?iso=grc"/></Route>
     <Route path='/usa'><DataView url="https://covid-api.com/api/reports/?iso=nld"/></Route>
   </Switch>
   </Router>
   <div className="contributions">
     Data reports by: 
   <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank" rel="noopener noreferrer">
   "COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University"
   </a>
   <br/>Servered by:
   <a href="https://covid-api.com/" target="_blank" rel="noopener noreferrer">Covid-API</a>
   <br/>
   Front-end made by: Kontopodis Emmanouil
   </div>
    </div>
  );
}

export default App;

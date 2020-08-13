import React,{useState} from 'react'
import './home.css'
import axios from 'axios'
function Home(){
    var [Total, setTotal] = useState(0);
    var [DidLoad,setDidLoad] = useState(false);
    var DidLoadThen = DidLoad;

    if (DidLoadThen === false){
       console.log("IF EXECUTED")
       DidLoadThen = true;
       setDidLoad(true);
            axios.get("https://covid-api.com/api/reports/total")
            .then(result=>{

                const ob = {
                    Confirmed: numberWithCommas(result.data.data.confirmed),
                    Deaths:numberWithCommas(result.data.data.deaths),
                    Recovered:numberWithCommas(result.data.data.recovered),
                    Active:numberWithCommas(result.data.data.active),
                    Fatality:result.data.data.fatality_rate
                }
                setTotal(ob);
              
                console.log("RESULT CAME BACK ",result);
            })
            .catch(result=>{
                console.log("ERROR ON CATCH ",result)
                setDidLoad = true;
            })
        

        
    }

  
   const numberWithCommas=(x)=> {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
    }
return (
    <div className='home'>
        <div className="home-title"> Global Covid Data</div>
        <div className="home-total-view">
            <div className="home-total-item">
                <div className="home-total-item-title">     Confirmed   </div>
                    {Total.Confirmed}
            </div>
            <div className="home-total-item">
                <div className="home-total-item-title">Deaths</div>
                    {Total.Deaths}
            </div>
<div className="home-total-item"><div className="home-total-item-title">Recovered</div>{Total.Recovered}</div>
<div className="home-total-item"><div className="home-total-item-title">Active</div>{Total.Active}</div>
<div className="home-total-item"><div className="home-total-item-title">Fatality Rate</div>{Total.Fatality}</div>
        </div>
        <div className="empty-space"/>
        </div>
)

}
export default Home;

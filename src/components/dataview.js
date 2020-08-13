import React,{useState} from 'react'
import './home.css'
import axios from 'axios'
function DataView(props){
    var [Total, setTotal] = useState(0);
    var [DidLoad,setDidLoad] = useState(false);
    var DidLoadThen = DidLoad;

    if (DidLoadThen === false){
       console.log("IF EXECUTED")
       DidLoadThen = true;
       setDidLoad(true);
            axios.get(props.url)
            .then(result=>{
                console.log(result.data.data.confirmed)
                console.log("RESULT CAME BACK ",result);
                const ob = {
                    Confirmed: numberWithCommas(result.data.data[0].confirmed),
                    Deaths:numberWithCommas(result.data.data[0].deaths),
                    Recovered:numberWithCommas(result.data.data[0].recovered),
                    Active:numberWithCommas(result.data.data[0].active),
                    Fatality:result.data.data[0].fatality_rate
                }
                setTotal(ob);
              
                
            })
            .catch(result=>{
                console.log("ERROR ON CATCH ",result)
                setDidLoad = true;
            })
        

        
    }

  
   let numberWithCommas=(x)=> {
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
export default DataView;

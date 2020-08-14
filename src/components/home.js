import React,{useState} from 'react'
import './home.css'
import axios from 'axios'
function Home({data}){

    if (data !== undefined || data !== null || data !== 0){
return (
    <div className='home'>
        <div className="home-title"> Global Covid Data</div>
        <div className="home-total-view">
            <div className="home-total-item">
                <div className="home-total-item-title">     Confirmed   </div>
                    {data.Confirmed}
            </div>
            <div className="home-total-item">
                <div className="home-total-item-title">Deaths</div>
                    {data.Deaths}
            </div>
<div className="home-total-item"><div className="home-total-item-title">Recovered</div>{data.Recovered}</div>
<div className="home-total-item"><div className="home-total-item-title">Active</div>{data.Active}</div>
<div className="home-total-item"><div className="home-total-item-title">Fatality Rate</div>{data.Fatality}</div>
        </div>
        <div className="empty-space"/>
        </div>
)}

}
export default Home;

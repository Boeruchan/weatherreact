import React,  { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

function WeatherDetail({lat, ion, active, setActive}) {
    const [details, setDetails] = useState('');
    const  [date, setDate] = useState([]);
    const {uuid} = require('uuidv4');
    // console.log({uuid})

    useEffect(() => {       
        const getDataFromServer = async()=>{
            let req = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${ion}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
             let data = await req.json();
            setDetails(data);
            setDate(data.daily);
            // console.log(data);    
          } 
        getDataFromServer()
    }, [lat, ion]);
    return (

<div className="week">

{date &&
    date.map((datum, index) => {
        const d = new Date(datum.dt * 1000);
        const n = d.toLocaleDateString();
        // console.log(d, n);

        <div>              
        <h1>{details.timezone} details</h1>
        </div>
        return(
            <div key={uuid()}>
                <div className="accordion">
                    <div className="accordionHeading">
                    <div className="container">
                <h3>{n} <img src={`http://openweathermap.org/img/wn/${datum.weather[0].icon}@2x.png`} alt='' width='50px'/>
             <span>{Math.floor(datum.temp.min)}/{Math.floor(datum.temp.max)}C</span> </h3> 
             <span onClick={() => setActive(n)}>{active === n ? "X" : "|||"}</span>          
             </div>
             </div>
               <div className={(active === n ? "show" : "") + "accordionContent"}>
                   <div className="container">
                 <table>
                        <tr>
                            <th></th>
                        <th>morning</th>
                        <th>afternoon</th>
                        <th>eve</th>
                        <th>night</th>
                        </tr>
                        <tr>
                        <th>Temp</th>
                        <td>{Math.floor(datum.temp.day)}</td>
                        <td>{Math.floor(datum.temp.morn)}</td>
                        <td>{Math.floor(datum.temp.eve)}</td>
                        <td>{Math.floor(datum.temp.night)}</td>
                        </tr>
                </table>
               </div> 
             </div>  
             </div>
             </div>       
             );
})}
</div>

    )
}
    export default WeatherDetail;
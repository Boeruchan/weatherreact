import React,  { useState, useEffect } from 'react';

function WeatherFetch({city}) {
    const [posts, setPosts] = useState('');
    // console.log(posts)
    useEffect(() => {
        const getDataFromServer = async()=>{
            let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
             let data = await req.json();
            //  console.log(data);
            setPosts(data);        
          }
        getDataFromServer()
    }, [city]);

    // console.log(posts)

if (posts === ""){
    return <p>loading</p>
} else {
    return(
        <div className="card">
            <h1>{posts.name}</h1>
           <img src={`http://openweathermap.org/img/wn/${posts.weather[0].icon}@2x.png`} alt='' />
           <p>{Math.floor(posts.main.temp)}</p>
           <br /><br />
            <table className="cardtext">
                <tbody>
                <tr>
                <td>min temp</td>
                <td>max temp</td>
                <td>humidity</td>
                </tr>
                <tr>
                    <td>{Math.floor(posts.main.temp_min)}</td>
                    <td>{Math.floor(posts.main.temp_max)}</td>
                    <td>{Math.floor(posts.main.humidity)}</td>
                </tr>
                </tbody>
            </table>
            <div class="click">
            <p>Click me</p>
            </div>
        </div>
    )
}
}

export default WeatherFetch;
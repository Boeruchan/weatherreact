import React, { useState } from "react";
import "./App.css";
import WeatherFetch from "./Components/WeatherFetch";
import WeatherDetail from "./Components/WeatherDetail";

function App() {
  const [toggle, setToggle] = useState(null);
  const [active, setActive] = useState(null);

  const toggled = () => {
    setToggle(!toggle);
  };

  console.log(toggled);

  return (
    <div className="App">
      <div className="Titel">
        <h1>WeatherApp</h1>
      </div>
      <div className="city">
        <button onClick={toggled} className="button_card">
          <WeatherFetch city="Zwijndrecht" />
          <img src="" alt="icon"/>
        </button>
        <div className="detail">
          {toggle ? (
            <WeatherDetail lat="51.8175" ion="4.6333" active={active} setActive={setActive} />
          ) : null}
        </div>
      </div>
      <a href="https://chingmfw.netlify.app/portfolio.html">Back to portfolio</a>
    </div>
  );
}

export default App;

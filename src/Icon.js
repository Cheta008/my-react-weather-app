import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon() {
  return ( 
    <span className="Icon"> 
      <ReactAnimatedWeather
       icon="RAIN"
       color="black"
       size={40}
       animate={true}
        />
      </span>
  )
}
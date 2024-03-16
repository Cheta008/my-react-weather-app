import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast"> 
        <ul>
            <li>
              <div className="forecast-day">Mon</div>
              <div> <ReactAnimatedWeather
                      icon="CLOUDY"
                      color="black"
                      size={40}
                      animate={true}
                      />   
                </div>
              <div className="forecast-temp">15°</div>
            </li>
             <li>
              <div className="forecast-day">Tue</div>
              <div> <ReactAnimatedWeather
                      icon="CLOUDY"
                      color="black"
                      size={40}
                      animate={true}
                      />
             </div>
              <div className="forecast-temp">16°</div>
            </li>
             <li>
              <div className="forecast-day">Wed</div>
              <div> <ReactAnimatedWeather
                      icon="CLOUDY"
                      color="black"
                      size={40}
                      animate={true}
                      />
              </div>
              <div className="forecast-temp">17°</div>
            </li>
             <li>
              <div className="forecast-day">Thu</div>
              <div> <ReactAnimatedWeather
                      icon="CLEAR_DAY"
                      color="black"
                      size={40}
                      animate={true}
                      />
              </div>
              <div className="forecast-temp">15°</div>
            </li>
             <li>
              <div className="forecast-day">Fri</div>
              <div> <ReactAnimatedWeather
                      icon="CLEAR_NIGHT"
                      color="black"
                      size={40}
                      animate={true}
                   />
               </div>
              <div className="forecast-temp">14°</div>
            </li>
        </ul>
    </div>
  )
}
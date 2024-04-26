import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast container"> 
    <div className='row'>
        <ul>
          <div className='col-2'>
            <li>
              <div className="forecast-day">Mon</div>
              <div> <ReactAnimatedWeather
                      icon="CLOUDY"
                      color="black"
                      size={34}
                      animate={true}
                      />   
                </div>
              <div className="forecast-temp">15°</div>
            </li>
            </div>
            <div className='col-2'>
             <li>
              <div className="forecast-day">Tue</div>
              <div> <ReactAnimatedWeather
                      icon="CLOUDY"
                      color="black"
                      size={34}
                      animate={true}
                      />
             </div>
              <div className="forecast-temp">16°</div>
            </li>
            </div>
            <div className='col-2'>
             <li>
              <div className="forecast-day">Wed</div>
              <div> <ReactAnimatedWeather
                      icon="CLOUDY"
                      color="black"
                      size={34}
                      animate={true}
                      />
              </div>
              <div className="forecast-temp">17°</div>
            </li>
            </div>
            <div className='col-2'>
             <li>
              <div className="forecast-day">Thu</div>
              <div> <ReactAnimatedWeather
                      icon="CLEAR_DAY"
                      color="black"
                      size={34}
                      animate={true}
                      />
              </div>
              <div className="forecast-temp">15°</div>
            </li>
            </div>
            <div className='col-2'>
             <li>
              <div className="forecast-day">Fri</div>
              <div> <ReactAnimatedWeather
                      icon="CLEAR_NIGHT"
                      color="black"
                      size={34}
                      animate={true}
                   />
               </div>
              <div className="forecast-temp">14°</div>
            </li>
            </div>
        </ul>
        </div>
    </div>
  )
}
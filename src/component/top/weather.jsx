import React from 'react';
import SunImg from '../../Image/sun.png';
export default class Weather extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {location,temp_c,isDay,text,iconURL}=this.props;
        return(
            <div className='weather-container'>
                   <div>{isDay}</div>
                  <div className="header">{location}</div>
                  <div className="inner-container">
                        <div className="img"><img src={iconURL} alt=""/></div>
                        <div className="current-weather">{temp_c}</div>
                  </div>
                  <div className="footer">{text}</div>
            </div>
        )
    }
}
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './component/top/top';
import Bottom from './component/bottom/bottom';
import './sass/style.scss';
import axios from 'axios';
const weather_key="3849ef38d87bc6756e74281fc82f6c47";
class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
         cityName:"London",
         forcastDay:5,
         loading:true
      }
    }
    componentDidMount(){
         //retrieve data
        const {cityName,forcastDay}=this.state;
        const URL=`http://api.weatherstack.com/current?access_key=${weather_key}&query=${cityName}`;
        axios.get(URL).then((res)=>{
            return res.data;
        }).then((data)=>{
          // console.log(data)
           this.setState({
             loading:false,
             temp_c:data.current.temperature,
             isDay:data.location.localtime,
             iconURL:data.current.weather_icons,
             text:data.current.weather_descriptions,
             location:data.location.name
            })
        }).catch((err)=>{
          if(err){
            console.error("Cannot fetch weather Data from API",err);
          }
        })
    }
    render(){
      const {loading,location,temp_c,isDay,text,iconURL}=this.state;
        return (
          <div className="app-container">
            <div className="main-container"> 
              {loading&&<h3>The page is loading...</h3>}
              {!loading&&
                  <div className="top-section">
                      <Top location={location} temp_c={temp_c} isDay={isDay} text={text} iconURL={iconURL} ></Top>
                  </div>
              }
                  <div className="bottom-section">
                      <Bottom></Bottom>
                  </div>
            </div>
          </div>
        );
      }
}

export default App;

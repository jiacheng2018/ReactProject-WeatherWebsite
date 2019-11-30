import React, { Component } from 'react';
import logo from './logo.svg';
import Title from './Components/Title';
import Form from './Components/Form';
import { tsConstructorType } from '@babel/types';
import Weather from './Components/Weather';
const API_KEY = '8fd8acf9a851ceb137378de3bd7d6a7c';
class App extends Component {
          state = {
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    huminity: undefined,
                    error: undefined,
                    description: undefined,
                    error: ''
          };
          getWeather = async e => {
                    e.preventDefault();
                    const city = e.target.elements.city.value;
                    const country = e.target.elements.country.value;
                    const api_call = await fetch(
                              `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
                    );
                    const data = await api_call.json();
                    if (city && country) {
                              this.setState({
                                        temperature: data.main.temp,
                                        city: data.name,
                                        country: data.sys.country,
                                        huminity: data.main.huminity,
                                        description:
                                                  data.weather[0].description,
                                        error: ''
                              });
                    } else {
                              this.setState({
                                        temperature: undefined,
                                        city: undefined,
                                        country: undefined,
                                        huminity: undefined,
                                        description: undefined,
                                        error: 'Please enter correct Address!!'
                              });
                    }
          };
          render() {
                    return (
                              <div>
                                        <div className="wrapper">
                                                  <div className="main">
                                                            <div className="container">
                                                                      <div className="row">
                                                                                <div className="col-xs-5 title-container">
                                                                                          <Title />
                                                                                </div>
                                                                                <div className="col-xs-7 form-container">
                                                                                          <Form
                                                                                                    getWeather={
                                                                                                              this
                                                                                                                        .getWeather
                                                                                                    }
                                                                                          />
                                                                                          <Weather
                                                                                                    temperature={
                                                                                                              this
                                                                                                                        .state
                                                                                                                        .temperature
                                                                                                    }
                                                                                                    city={
                                                                                                              this
                                                                                                                        .state
                                                                                                                        .city
                                                                                                    }
                                                                                                    country={
                                                                                                              this
                                                                                                                        .state
                                                                                                                        .country
                                                                                                    }
                                                                                                    huminity={
                                                                                                              this
                                                                                                                        .state
                                                                                                                        .huminity
                                                                                                    }
                                                                                                    description={
                                                                                                              this
                                                                                                                        .state
                                                                                                                        .description
                                                                                                    }
                                                                                                    error={
                                                                                                              this
                                                                                                                        .state
                                                                                                                        .error
                                                                                                    }
                                                                                          />
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    );
          }
}

export default App;

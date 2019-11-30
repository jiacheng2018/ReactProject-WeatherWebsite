import React, { Component } from 'react';

export default class Title extends Component {
          render() {
                    return (
                              <div>
                                        <h1 className="title-container__title">
                                                  Weather Finder
                                        </h1>
                                        <p className="title-container__subtitle">
                                                  Find out Temperature
                                        </p>
                              </div>
                    );
          }
}

import React, {Component} from 'react';
export default class Popup extends React.Component{
    render(){
        return(
            <div className='popup'>
                  <div className='popup_inner'>
                      <h1>{this.props.text}</h1>
                      <button onClick={this.props.closePopup}>Close Me</button>
                  </div>
            </div>
        )
    }
};
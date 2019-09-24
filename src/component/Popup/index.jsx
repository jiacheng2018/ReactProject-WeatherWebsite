import React from 'react';
import PopText from './PopText'
export default class PopUp extends React.Component{
    constructor(props){
      super(props);
      this.state={
            showPopup:false
        }
    }
    togglePopup(){
        this.setState({
            showPopup:!this.state.showPopup
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.togglePopup.bind(this)}></button>
                {this.state.showPopup?
                    <PopText 
                    text='close Button'
                    closePopup={this.togglePopup.bind(this)}
                   />:null
                }
            </div>
        )
    }
}
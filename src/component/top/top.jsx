import React from 'react';
import './top.scss';
import Weather from './weather';
import { Manager, Reference, Popper } from 'react-popper';
export default class Top extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSelectLocationOpen:false
        };
    }
    onToggle(){
        this.setState((prevState)=>({isSelectLocationOpen:!prevState.isSelectLocationOpen}));
    }
    render(){
        const {isSelectLocationOpen}=this.state;
        return (
            <div className="top-container">
               <div className="title">Weather Up</div>
               <Weather {...this.props}/>
               {/* <button className="btn btn-select-location">Select location</button> */}
                    <Manager>
                        <Reference>
                        {({ ref }) => (
                            <button type="button" ref={ref} onClick={this.onToggle.bind(this)}>
                            Reference element
                            </button>
                        )}
                        </Reference>
                        <Popper placement="top">
                        {({ ref, style, placement, arrowProps }) => (isSelectLocationOpen &&
                            <div ref={ref} style={style} data-placement={placement}>
                            Popper element
                            <div ref={arrowProps.ref} style={arrowProps.style} />
                            </div>
                        )}
                        </Popper>
                    </Manager>
            </div>
        )
    }
}
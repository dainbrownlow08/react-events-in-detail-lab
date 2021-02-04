// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    

    handleClick = (event,f) => {
        f([event.clientX,event.clientY])
    }

    render() {
        return (
          <button onClick={(event) => this.handleClick(event,this.props.onReceiveCoordinates)}>Coords Button</button>
        )
    }

}
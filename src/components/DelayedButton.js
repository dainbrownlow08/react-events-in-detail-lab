// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    handleClick = (event,f,delay) => {
        event.persist()
        setTimeout(() => {
            f(event)
        }, delay);
    }


    render() {
        return (
            <button onClick={(e) => this.handleClick(e,this.props.onDelayedClick,this.props.delay)}>Delay Button</button>
        )
    }

}
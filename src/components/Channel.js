import React from 'react'
import ReactDOM from 'react-dom'

export default class Channel extends React.Component {
    onClick() {
        console.log("I was Clicked",this.props.name);
    }
    render() {
        return(
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}
import React from 'react'
import ReactDOM from 'react-dom'

export default class Channel extends React.Component {
    render() {
        return(
            <li>{this.props.name}</li>
        )
    }
}
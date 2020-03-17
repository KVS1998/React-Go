import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {

  render() {
    let {message} = this.props
    return (
      <li className='message'>
        <div className="author">
          <strong>{message.author}</strong>
        </div>
        <div className="body">{message.body}</div>
      </li>
    )
  }

}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
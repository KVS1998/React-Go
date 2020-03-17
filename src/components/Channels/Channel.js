import React from 'react'
import PropTypes from 'prop-types'

class Channel extends React.Component {
    onClick(e) {
        e.preventDefault();
        const {setChannel,channel} = this.props;
        setChannel(channel);
    }
    render() {
        return(
            <li onClick={this.onClick.bind(this)}>{this.props.channel.name}</li>
        )
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default Channel
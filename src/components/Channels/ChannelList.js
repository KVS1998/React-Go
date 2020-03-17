import React from 'react'
import Channel from './Channel'
import PropTypes from 'prop-types'
class ChannelList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.channels.map( chan => {
                    return(
                        <Channel 
                            channel={chan}
                            setChannel={this.props.setChannel}/>
                    )
                    })
                } 
            </ul>
        )
    }
}
ChannelList.propTypes = {
    channels:PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}
export default ChannelList
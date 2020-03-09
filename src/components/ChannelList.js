import React from 'react'
import ReactDOM from 'react-dom'
import Channel from './Channel'

class ChannelList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.channels.map( channel => {
                    return(
                        <Channel name={channel.name}/>
                    )
                    })
                } 
            </ul>
        )
    }
}
export default ChannelList
import React from 'react'
import ChannelList from './ChannelList'
import ChannelForm from './ChannelForm'
export default class ChannelForm extends React.Component {
    
    render() {
        return(
            <div>
                <ChannelList 
                    {...this.props}
                />
                <ChannelForm
                    {...this.props}
                />
            </div>
        )
    }
}
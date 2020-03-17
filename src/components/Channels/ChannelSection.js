import React, { Component} from 'react'
import PropTypes from 'prop-types'
import ChannelForm from './ChannelForm.js'
import ChannelList from './ChannelList.js'

class ChannelSection extends Component {
    render() {
        return(
            <div>
                <div>
                    <strong>Channels</strong>
                </div>
                <div>
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels : PropTypes.array.isRequired,
    setChannel : PropTypes.func.isRequired,
    addChannel : PropTypes.func.isRequired,
    activeChannel : PropTypes.object.isRequired
}

export default ChannelSection
import React from 'react';
import ChannelSection from './components/Channels/ChannelSection.js';
import UserSection from './components/Users/UserSection.js';
import MessageSection from './components/Messages/MessageSection.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      users: [],
      messages: []
    };
  }
  
  addChannel(name) {
    let {channels} = this.state;
    channels.push({id:channels.length, name});
    this.setState({channels});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel})
  }
  setUserName(name){
    let {users} = this.state;
    users.push({id:users.length, name});
    this.setState({users})
  }
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection 
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)} />
          <UserSection 
            {...this.state}
            setUserName={this.setUserName.bind(this)}/>
        </div>
        {/*<MessageSection /> */}
      </div> 
    )
  }

}

export default App

import React from 'react';
import ChannelList from './components/ChannelList.js';
let channels = [
  {name: 'Hardware Support'},
  {name: 'Software Support'}
]
function App() {
  return (
    <div className="App">
      <ChannelList channels={channels}/>
    </div>
  );
}

export default App;

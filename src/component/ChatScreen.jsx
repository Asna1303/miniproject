import React from 'react'
import Sidebar from '../component/Sidebar'
import Chatting from '../component/Chatting'

const ChatScreen = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chatting/>
      </div>
    </div>
  )
}

export default ChatScreen
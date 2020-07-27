import React, { useState } from 'react';
import SimpleForm from './SimpleForm';
import '../../App.css';

const ChatBot = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className='bot'>
        <div style={{ display: showChat ? '' : 'none' }}>
          <SimpleForm></SimpleForm>
        </div>
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat ? (
            <button className='btnn' onClick={() => startChat()}>
              click to chat...{' '}
            </button>
          ) : (
            <button className='btnn' onClick={() => hideChat()}>
              click to hide...{' '}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;

import List from "./components/List";
import messageList from "./components/messageList";
import React, { useEffect, useState } from 'react';
import './App.css'
import Controls from "./components/Controls";
import { UNREAD, READ } from "./constants";

function App() {

  const [messages, setMessages] = useState(messageList);

  const handleClick = (messageId, newStatus) => {
    console.log('cliquei')
    console.log('ID', messageId)
    console.log('STATUS', newStatus)
    const updateMessages = messages.map((currentMessage) => {      
      if (currentMessage.id === messageId) {
        return {
          ...currentMessage,
          status: newStatus,
        }
      }
      return currentMessage; 
    })
    setMessages(updateMessages);
  };

  const markAllRead = () => {
    const updateReadMsgs = messageList.map((message) => {
      return ({
        ...message,
        status: READ,
      })
    })
    setMessages(updateReadMsgs)
  };
  const markAllUnread = () => {
    const updateReadMsgs = messageList.map((message) => {
      return ({
        ...message,
        status: UNREAD,
      })
    })
    setMessages(updateReadMsgs)
  };

  useEffect(() => {
    const allStatus = messages.every((message) => message.status === READ);
    allStatus && window.alert('eita!')
  }, [messages])

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <Controls markAllRead={ markAllRead } markAllUnread={ markAllUnread } />
      <List messages={ messages } handleClick={ handleClick }  />
    </div>
  );
}

export default App;

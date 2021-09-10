import React, {useState, useRef} from 'react'

export function WebSoc() {
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('')

  function connect() {
    socket.current = new WebSocket('ws://localhost:5000');

    socket.current.onopen = () => {
      setConnected(true);
      console.log('>> socket opened');

      const message = {
        event: 'connection',
        username,
        id: Date.now()
      }
      socket.current.send(JSON.stringify(message))
    }

    socket.current.onmessage = (event) => {
      const message = event.data;
      console.log(message);
      // setMessages(prev => [message, ...prev])
    }

    socket.current.onclose = () => {
      console.log('socket closed');
    }

    socket.current.onerror = () => {
      console.log('socket error');
    }
    
  }
 
  const sendMsg = async () => {
    const message = {
      event: 'message',
      username,
      id: Date.now()
    }
    socket.current.send(JSON.stringify(message));
  }

  if (!connected) {
    return (
      <div className="center">
        <input value={username} type="text" onChange={e => setUsername(e.target.value)}  placeholder='enter name'></input>
        <button onClick={connect}>enter</button>
      </div>
    )
  }

  return (<>
    <button onClick={sendMsg}>Send</button>
  </>)
}
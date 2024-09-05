import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const SocketComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessage(msg);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const joinCodeBlock = () => {
    socket.emit('joinCodeBlock', { blockId: '1' });
  };

  return (
    <div>
      <h1>Socket.IO with React</h1>
      <button onClick={joinCodeBlock}>Join Code Block</button>
      <p>{message}</p>
    </div>
  );
};

export default SocketComponent;

import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import './App.css';

function App() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const totalRooms = 4;

  const handleRoomChange = (roomIndex) => {
    if (roomIndex !== currentRoom && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRoom(roomIndex);
        setIsTransitioning(false);
      }, 500);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isTransitioning) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleRoomChange((currentRoom + 1) % totalRooms);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handleRoomChange((currentRoom - 1 + totalRooms) % totalRooms);
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleRoomChange(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleRoomChange(totalRooms - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoom, isTransitioning]);

  return (
    <div className="App">
      <Scene 
        currentRoom={currentRoom}
        onRoomChange={handleRoomChange}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}

export default App;

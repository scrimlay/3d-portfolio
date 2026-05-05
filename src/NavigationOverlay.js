import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NavigationOverlay.css';

export function NavigationOverlay({ rooms, currentRoom, onRoomChange, isTransitioning }) {
  return (
    <div className="navigation-overlay">
      {/* Header */}
      <motion.div
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1>3D Interactive Portfolio</h1>
        <p>Navigate using buttons or arrow keys</p>
      </motion.div>

      {/* Room Navigation */}
      <div className="room-navigation">
        <AnimatePresence>
          {rooms.map((room, index) => (
            <motion.button
              key={room.id}
              className={`room-button ${index === currentRoom ? 'active' : ''}`}
              onClick={() => onRoomChange(index)}
              disabled={isTransitioning}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                '--room-color': room.color,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="room-number">{index + 1}</span>
              <span className="room-name">{room.name}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Current Room Info */}
      <motion.div
        className="room-info"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoom}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 style={{ color: rooms[currentRoom].color }}>
              {rooms[currentRoom].name}
            </h2>
            <p>Room {currentRoom + 1} of {rooms.length}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Instructions */}
      <motion.div
        className="instructions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>🖱️ Drag to rotate • Scroll to zoom • Click buttons to navigate</p>
      </motion.div>
    </div>
  );
}
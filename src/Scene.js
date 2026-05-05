import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { PortfolioRoom } from './PortfolioRoom';
import { NavigationOverlay } from './NavigationOverlay';
import './Scene.css';

function Scene({ currentRoom, onRoomChange, isTransitioning }) {
  const rooms = [
    { id: 0, name: 'Welcome', color: '#4A90E2', position: [0, 0, 0] },
    { id: 1, name: 'Projects', color: '#50E3C2', position: [15, 0, 0] },
    { id: 2, name: 'Skills', color: '#F5A623', position: [30, 0, 0] },
    { id: 3, name: 'Contact', color: '#E94B3C', position: [45, 0, 0] },
  ];

  return (
    <div className="scene-container">
      <Canvas shadows>
        <Suspense fallback={<LoadingOverlay />}>
          <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={75} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, 10, -5]} intensity={0.5} />
          
          {/* Environment */}
          <Environment preset="city" />
          <ContactShadows position={[0, -5, 0]} opacity={0.5} scale={20} blur={2} />
          
          {/* Portfolio Rooms */}
          {rooms.map((room) => (
            <PortfolioRoom
              key={room.id}
              room={room}
              isActive={room.id === currentRoom}
              isTransitioning={isTransitioning}
            />
          ))}
          
          {/* Camera Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={20}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      
      {/* UI Navigation Overlay */}
      <NavigationOverlay
        rooms={rooms}
        currentRoom={currentRoom}
        onRoomChange={onRoomChange}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading 3D Portfolio...</p>
    </div>
  );
}

export default Scene;
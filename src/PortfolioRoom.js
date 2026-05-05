import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export function PortfolioRoom({ room, isActive, isTransitioning }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth transition animation
      const targetOpacity = isActive ? 1 : 0.3;
      const currentOpacity = groupRef.current.children[0]?.material.opacity || 0;
      groupRef.current.children.forEach((child) => {
        if (child.material) {
          child.material.opacity = THREE.MathUtils.lerp(currentOpacity, targetOpacity, 0.1);
          child.material.transparent = true;
        }
      });
      
      // Subtle floating animation for active room
      if (isActive && !isTransitioning) {
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  const roomContent = {
    0: (
      <>
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Welcome to My Portfolio
        </Text>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.5}
          color="#cccccc"
          anchorX="center"
          anchorY="middle"
        >
          I'm a Computer Science Student & Developer
        </Text>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.4}
          color="#999999"
          anchorX="center"
          anchorY="middle"
        >
          Navigate through 3D space to explore my work
        </Text>
        <Sphere position={[0, -1, 0]} args={[1.2]} color={room.color}>
          <meshStandardMaterial roughness={0.3} metalness={0.7} />
        </Sphere>
      </>
    ),
    1: (
      <>
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          My Projects
        </Text>
        <Text
          position={[0, 2.2, 0]}
          fontSize={0.4}
          color="#cccccc"
          anchorX="center"
          anchorY="middle"
        >
          Click to explore each project
        </Text>
        
        {/* Project 1 */}
        <group position={[-2.5, 0, 0]}>
          <Box args={[1.5, 2, 0.3]} color="#4A90E2">
            <meshStandardMaterial roughness={0.4} metalness={0.6} />
          </Box>
          <Text
            position={[0, 0.8, 0.2]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Project Scaffold
          </Text>
          <Text
            position={[0, 0.3, 0.2]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            CLI Tool
          </Text>
        </group>
        
        {/* Project 2 */}
        <group position={[0, 0, 0]}>
          <Box args={[1.5, 2, 0.3]} color="#50E3C2">
            <meshStandardMaterial roughness={0.4} metalness={0.6} />
          </Box>
          <Text
            position={[0, 0.8, 0.2]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            3D Portfolio
          </Text>
          <Text
            position={[0, 0.3, 0.2]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            Interactive Web
          </Text>
        </group>
        
        {/* Project 3 */}
        <group position={[2.5, 0, 0]}>
          <Box args={[1.5, 2, 0.3]} color="#F5A623">
            <meshStandardMaterial roughness={0.4} metalness={0.6} />
          </Box>
          <Text
            position={[0, 0.8, 0.2]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            More Coming
          </Text>
          <Text
            position={[0, 0.3, 0.2]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            Soon
          </Text>
        </group>
      </>
    ),
    2: (
      <>
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Technical Skills
        </Text>
        
        {/* Skill 1 */}
        <group position={[-2, 0, 0]}>
          <Cylinder args={[0.6, 0.6, 2.5, 32]} color="#4A90E2">
            <meshStandardMaterial roughness={0.3} metalness={0.7} />
          </Cylinder>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            JavaScript
          </Text>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            React, Node.js
          </Text>
        </group>
        
        {/* Skill 2 */}
        <group position={[0, 0, 0]}>
          <Cylinder args={[0.8, 0.8, 3, 32]} color="#50E3C2">
            <meshStandardMaterial roughness={0.3} metalness={0.7} />
          </Cylinder>
          <Text
            position={[0, 1.8, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Python
          </Text>
          <Text
            position={[0, -1.8, 0]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            Django, Flask
          </Text>
        </group>
        
        {/* Skill 3 */}
        <group position={[2, 0, 0]}>
          <Cylinder args={[0.5, 0.5, 2, 32]} color="#F5A623">
            <meshStandardMaterial roughness={0.3} metalness={0.7} />
          </Cylinder>
          <Text
            position={[0, 1.2, 0]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            3D/WebGL
          </Text>
          <Text
            position={[0, -1.2, 0]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            Three.js
          </Text>
        </group>
        
        {/* Additional skills */}
        <group position={[0, -2, 0]}>
          <Text
            position={[-1.5, 0, 0]}
            fontSize={0.2}
            color="#4A90E2"
            anchorX="center"
            anchorY="middle"
          >
            Git/GitHub
          </Text>
          <Text
            position={[0, 0, 0]}
            fontSize={0.2}
            color="#50E3C2"
            anchorX="center"
            anchorY="middle"
          >
            SQL/NoSQL
          </Text>
          <Text
            position={[1.5, 0, 0]}
            fontSize={0.2}
            color="#F5A623"
            anchorX="center"
            anchorY="middle"
          >
            Docker
          </Text>
        </group>
      </>
    ),
    3: (
      <>
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Get In Touch
        </Text>
        
        <group position={[-1.5, 0, 0]}>
          <Sphere args={[1]} color="#4A90E2">
            <meshStandardMaterial roughness={0.3} metalness={0.7} />
          </Sphere>
          <Text
            position={[0, 0, 1.2]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Email
          </Text>
        </group>
        
        <group position={[1.5, 0, 0]}>
          <Sphere args={[1]} color="#50E3C2">
            <meshStandardMaterial roughness={0.3} metalness={0.7} />
          </Sphere>
          <Text
            position={[0, 0, 1.2]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            GitHub
          </Text>
        </group>
        
        <group position={[0, -2, 0]}>
          <Text
            position={[0, 0, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Let's work together!
          </Text>
          <Text
            position={[0, -0.5, 0]}
            fontSize={0.2}
            color="#cccccc"
            anchorX="center"
            anchorY="middle"
          >
            Open to opportunities
          </Text>
        </group>
      </>
    ),
  };

  return (
    <group ref={groupRef} position={room.position}>
      {/* Room floor */}
      <Box position={[0, -2.5, 0]} args={[8, 0.5, 8]} color={room.color}>
        <meshStandardMaterial roughness={0.8} metalness={0.2} />
      </Box>
      
      {/* Room walls */}
      <Box position={[0, 0, -4]} args={[8, 6, 0.5]} color={room.color}>
        <meshStandardMaterial roughness={0.6} metalness={0.3} opacity={0.3} transparent />
      </Box>
      <Box position={[-4, 0, 0]} args={[0.5, 6, 8]} color={room.color}>
        <meshStandardMaterial roughness={0.6} metalness={0.3} opacity={0.3} transparent />
      </Box>
      <Box position={[4, 0, 0]} args={[0.5, 6, 8]} color={room.color}>
        <meshStandardMaterial roughness={0.6} metalness={0.3} opacity={0.3} transparent />
      </Box>
      
      {/* Room content */}
      {roomContent[room.id]}
    </group>
  );
}
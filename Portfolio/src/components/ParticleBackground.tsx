import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

const ParticleBackground: React.FC<{ density?: number }> = ({ density = 50 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialParticles: Particle[] = [];
    for (let i = 0; i < density; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        velocityX: (Math.random() - 0.5) * 0.5,
        velocityY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [density]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => {
          let newX = particle.x + particle.velocityX;
          let newY = particle.y + particle.velocityY;
          
          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) particle.velocityX *= -1;
          if (newY <= 0 || newY >= window.innerHeight) particle.velocityY *= -1;
          
          // Keep within bounds
          newX = Math.max(0, Math.min(window.innerWidth, newX));
          newY = Math.max(0, Math.min(window.innerHeight, newY));
          
          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + Math.pow(particle.y - mousePosition.y, 2)
        );
        const isNearMouse = distanceToMouse < 100;
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-accent to-teal-accent"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
            }}
            animate={{
              scale: isNearMouse ? 1.5 : 1,
              opacity: isNearMouse ? particle.opacity * 2 : particle.opacity,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;

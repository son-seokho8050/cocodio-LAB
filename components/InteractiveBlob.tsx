
import React, { useRef, useMemo, useEffect, useState } from 'react';
// Added AnimatePresence to the imports from framer-motion
import { motion, MotionValue, useTransform, AnimatePresence } from 'framer-motion';

interface InteractiveBlobProps {
  progress: MotionValue<number>;
  sectionIndex: number;
}

const InteractiveBlob: React.FC<InteractiveBlobProps> = ({ progress, sectionIndex }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);

  // Smooth mouse follow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Transform scale and rotation based on scroll progress
  const scale = useTransform(progress, [0, 0.5, 1], [1, 1.5, 0.8]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);

  // Color logic based on section index
  const colors = useMemo(() => {
    const palettes = [
      '#FF6B6B, #4ECDC4, #FFE66D', // Intro
      '#EF4444, #F87171, #FCA5A5', // Apple Red
      '#3B82F6, #60A5FA, #93C5FD', // Line/Point Blue
      '#10B981, #34D399, #6EE7B7', // Watermelon Green
      '#000000, #333333, #666666', // Gestalt Dark
    ];
    return palettes[sectionIndex % palettes.length];
  }, [sectionIndex]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* The Central Blob */}
      <motion.div
        ref={blobRef}
        className="relative w-48 h-48 md:w-96 md:h-96 pointer-events-auto cursor-pointer group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          scale,
          rotate,
          x: mousePos.x,
          y: mousePos.y,
        }}
      >
        {/* Liquid Gradient Blob */}
        <motion.div
          animate={{
            borderRadius: isHovering 
              ? ["40% 60% 70% 30% / 40% 50% 60% 50%", "30% 70% 50% 50% / 50% 30% 70% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              : ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl"
          style={{
            background: `linear-gradient(45deg, ${colors})`,
            filter: 'blur(2px)',
          }}
        >
          {/* Internal Ripple Effect Sim (CSS) */}
          {isHovering && (
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 bg-white/30 rounded-full m-auto w-1/2 h-1/2"
            />
          )}
        </motion.div>

        {/* Floating Text Particles around the blob */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div 
                className="absolute -top-8 -left-8 md:-top-12 md:-left-12 text-2xl md:text-6xl font-black opacity-[0.08] md:opacity-20"
                animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }}
            >
                DIFFERENT
            </motion.div>
            <motion.div 
                className="absolute top-1/2 -right-16 md:-right-24 text-2xl md:text-6xl font-black opacity-[0.08] md:opacity-20"
                animate={{ x: mousePos.x * 1.5, y: mousePos.y * -1.5 }}
            >
                CREA
            </motion.div>
            <motion.div 
                className="absolute -bottom-8 -left-16 md:-bottom-12 md:-left-24 text-2xl md:text-6xl font-black opacity-[0.08] md:opacity-20"
                animate={{ x: mousePos.x * -2, y: mousePos.y * 2 }}
            >
                PROACH
            </motion.div>
        </div>
      </motion.div>

      {/* Background Ripple on Hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.05 }}
            exit={{ scale: 2, opacity: 0 }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-zinc-900 rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBlob;
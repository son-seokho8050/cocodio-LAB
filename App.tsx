
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import InteractiveBlob from './components/InteractiveBlob';
import Navigation from './components/Navigation';
import Section from './components/Section';
import { contentData } from './constants';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate current section index for dynamic UI changes
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionCount = contentData.length;
      const index = Math.floor(latest * sectionCount);
      if (index !== currentSection && index < sectionCount) {
        setCurrentSection(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentSection]);

  return (
    <div ref={containerRef} className="relative bg-[#f7f7f5] text-zinc-900">
      <Navigation />
      
      {/* Dynamic Background Blob - Fixed Position */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <InteractiveBlob progress={smoothProgress} sectionIndex={currentSection} />
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {contentData.map((data, index) => (
          <Section key={index} data={data} index={index} />
        ))}
      </main>

      {/* Footer / Contact Overlay */}
      <footer className="min-h-screen w-full flex items-center justify-center bg-black text-white relative z-20 py-20">
        <div className="text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-9xl font-black mb-8 leading-none"
          >
            WELCOME TO <br /> COCODIO LAB
          </motion.h2>
          <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 px-4">
            디자인은 단순한 감각이 아닙니다. <br className="hidden md:block" />
            세상을 해체하고 재구성하는 당신만의 논리입니다.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors text-sm md:text-base">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
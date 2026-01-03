
import React from 'react';
import { motion } from 'framer-motion';

interface ContentSection {
  title: string;
  subtitle?: string;
  description: string;
  imageAlt?: string;
  points?: string[];
  isDark?: boolean;
}

interface SectionProps {
  data: ContentSection;
  index: number;
}

const Section: React.FC<SectionProps> = ({ data, index }) => {
  const renderVisual = (text: string) => {
    // Chapter 01: Elements
    if (text.startsWith('점')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-zinc-900 rounded-full shadow-lg" 
          />
        </div>
      );
    }
    if (text.startsWith('선')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center overflow-visible">
          <motion.div 
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2px] bg-zinc-900 rotate-[-45deg] absolute" 
            style={{ width: '100%' }}
          />
        </div>
      );
    }
    if (text.startsWith('면')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-8 h-8 bg-zinc-900/10 border border-zinc-900" 
          />
          <div className="absolute w-6 h-6 bg-zinc-900/20 translate-x-1 -translate-y-1" />
        </div>
      );
    }

    // Chapter 02: Space
    if (text.startsWith('포지티브')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-8 h-8 bg-zinc-900 rounded-full shadow-inner" 
          />
        </div>
      );
    }
    if (text.startsWith('네거티브')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-8 h-8 bg-zinc-900 rounded-sm flex items-center justify-center overflow-hidden">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="w-5 h-5 bg-[#f7f7f5] rounded-full" 
            />
          </div>
        </div>
      );
    }

    // Chapter 03: Perspective
    if (text.startsWith('정면')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex gap-1 items-center justify-center">
           <div className="w-4 h-4 border border-zinc-900 rounded-sm" />
           <div className="w-4 h-4 border border-zinc-900 rounded-sm bg-zinc-900/10" />
        </div>
      );
    }
    if (text.startsWith('단면')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-8 h-8 border border-zinc-900 rounded-full overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/20 border-l border-zinc-900" />
          </div>
        </div>
      );
    }
    if (text.startsWith('반전')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-8 h-8 border border-zinc-900 rounded-full overflow-hidden flex">
            <div className="w-1/2 h-full bg-zinc-900" />
            <div className="w-1/2 h-full bg-transparent" />
          </div>
        </div>
      );
    }
    if (text.startsWith('트리밍')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-8 h-8 border border-dotted border-zinc-400 rounded-full flex items-center justify-center">
             <motion.div 
               animate={{ scale: [1, 1.3, 1] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="w-3 h-3 bg-zinc-900 border border-zinc-900" 
             />
          </div>
          <div className="absolute inset-0 border border-zinc-900 w-5 h-5 m-auto" />
        </div>
      );
    }

    // Chapter 04: Structure
    if (text.startsWith('재현')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex flex-wrap gap-1 items-center justify-center w-8">
          {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 bg-zinc-900/40 rounded-full" />)}
        </div>
      );
    }
    if (text.startsWith('도형화')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-6 h-6 border border-zinc-900 rotate-45" />
          <div className="absolute w-6 h-6 border border-zinc-300" />
        </div>
      );
    }
    if (text.startsWith('스케일')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-end gap-2 justify-center">
          <div className="w-1.5 h-1.5 bg-zinc-900" />
          <div className="w-6 h-6 bg-zinc-900/10 border border-zinc-900" />
        </div>
      );
    }

    // Chapter 05: Poetics
    if (text.startsWith('타이포그래피')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center font-black text-2xl">
          A
          <div className="absolute inset-0 border border-zinc-200 border-dashed" />
        </div>
      );
    }
    if (text.startsWith('시각적 수사학')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-8 h-3 bg-zinc-900 rounded-full relative">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 rounded-full" />
          </div>
        </div>
      );
    }
    if (text.startsWith('게슈탈트')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center gap-1.5">
          <div className="w-3 h-8 border-l-2 border-zinc-900 rounded-l-full" />
          <div className="w-3 h-8 border-r-2 border-zinc-900 rounded-r-full" />
        </div>
      );
    }

    // Chapter 06: Algorithm
    if (text.startsWith('Observation')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <div className="w-8 h-5 border-2 border-zinc-900 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-zinc-900 rounded-full" />
          </div>
        </div>
      );
    }
    if (text.startsWith('Deconstruction')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <motion.div animate={{ x: -8, y: -8 }} className="absolute w-3 h-3 bg-zinc-900" />
          <motion.div animate={{ x: 8, y: 8 }} className="absolute w-3 h-3 bg-zinc-900/20" />
        </div>
      );
    }
    if (text.startsWith('Reconstruction')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <motion.div animate={{ x: 0, y: 0 }} initial={{ x: -15 }} className="absolute w-6 h-6 border border-zinc-900" />
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity }} className="absolute w-8 h-8 border border-zinc-200" />
        </div>
      );
    }
    if (text.startsWith('Value')) {
      return (
        <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 45, scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-5 bg-zinc-900" 
          />
        </div>
      );
    }

    return null;
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-20 md:py-24 overflow-hidden relative">
      <div className="max-w-4xl relative z-20 mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-[10px] md:text-sm font-black text-zinc-400 mb-3 md:mb-4 block tracking-widest uppercase">
            CHAPTER {index.toString().padStart(2, '0')}
          </span>
          <h2 className="text-4xl md:text-8xl font-black leading-tight mb-4 md:mb-6">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-lg md:text-3xl font-light text-zinc-600 mb-6 md:mb-8 max-w-2xl leading-relaxed italic">
              {data.subtitle}
            </p>
          )}
          <p className="text-base md:text-xl text-zinc-800 leading-relaxed max-w-3xl whitespace-pre-wrap">
            {data.description}
          </p>
          
          {data.points && (
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {data.points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="p-6 md:p-8 bg-white/40 backdrop-blur-md border border-zinc-200 rounded-2xl hover:bg-white hover:shadow-2xl transition-all group flex flex-col items-start"
                >
                  {renderVisual(point)}
                  <p className="font-bold text-zinc-900 text-xs md:text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Abstract Visual Elements - Scaled for mobile */}
      <div className="absolute right-[-10%] md:right-0 top-1/2 -translate-y-1/2 w-1/2 md:w-1/3 h-1/2 md:h-2/3 pointer-events-none opacity-[0.05] md:opacity-10">
         <motion.div 
            animate={{ 
                rotate: index * 45,
                scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="w-full h-full border-[1px] border-black rounded-full"
         />
      </div>
    </section>
  );
};

export default Section;
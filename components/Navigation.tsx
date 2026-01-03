
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-lg md:text-xl font-black tracking-tighter">COCODIO LAB</h1>
      </div>
      <div className="flex gap-8 pointer-events-auto font-bold text-[10px] md:text-xs uppercase tracking-widest">
        <a 
          href="https://drive.google.com/file/d/13HUmXlHjRy_l9aSWm8ORdSQZtqYdLmDk/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:line-through transition-all cursor-pointer pointer-events-auto"
        >
          Sauce
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
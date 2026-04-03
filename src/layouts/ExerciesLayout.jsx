import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExerciesLayout({ children, progress }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER: Progress & Quit */}
      <div className="max-w-5xl w-full mx-auto px-6 pt-10 pb-5 flex items-center gap-6">
        <button 
          onClick={() => navigate('/Practice')} 
          className="text-gray-400 hover:text-gray-600 transition-all"
        >
          <span className="material-symbols-rounded text-4xl font-bold">close</span>
        </button>

        {/* The Progress Bar */}
        <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden border-b-2 border-gray-200">
          <div 
            className="h-full bg-green-500 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* MAIN CONTENT: Where the questions go */}
      <main className="flex-1 flex flex-col items-center px-6">
        <div className="max-w-2xl w-full py-10">
          {children}
        </div>
      </main>
    </div>
  );
}

export default ExerciesLayout;
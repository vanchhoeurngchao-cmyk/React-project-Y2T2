import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExerciseCard({ data }) {
  const {id, title, icon, hearts, subtitle, description, outerBg, innerBg, textColor, isLocked } = data;
  const navigate = useNavigate();

  const handleStart = () =>{
    if(!isLocked){
      navigate(`/exercise/${id}`);
    }
  }

  return (
    <div className={`Exercise-card ${outerBg} rounded-4xl p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
      {/* Header Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-3xl">{icon}</span>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center gap-1 bg-white/20 px-4 py-2 rounded-full text-sm">
          ❤️ <span className="heart-count">{hearts}</span>
        </div>
      </div>

      {/* Inner Content Box */}
      <div className={`${innerBg} rounded-3xl p-5 relative overflow-hidden`}>
        <h3 className="text-lg font-semibold mb-1">{subtitle}</h3>
        <p className="text-white/90 text-sm mb-4">{description}</p>
        
        <button 
          onClick={handleStart}
          disabled={isLocked}
          className={`start-btn bg-white ${textColor} font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-opacity-90 hover:scale-105 disabled:opacity-50`}
        >
          {isLocked ? 'LOCKED' : 'START −1 ❤️'}
        </button>

        {isLocked && (
          <span className="material-symbols-rounded text-5xl absolute right-5 bottom-5 opacity-80">
            lock
          </span>
        )}
      </div>
    </div>
  );
}

export default ExerciseCard;
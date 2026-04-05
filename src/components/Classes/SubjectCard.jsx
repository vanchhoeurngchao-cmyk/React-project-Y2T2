import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubjectCard({ data }) {
  const {id, title, description, bgColor, btnTextColor, image, imgStyle } = data;
  const navigate = useNavigate();
  
  const handleStart = () =>{
    navigate(`/lesson/${id}`);
  }

  return (
    <div className={`rounded-3xl p-6 text-white relative flex flex-col justify-between min-h-70 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl ${bgColor}`}>
      <div>
        <h3 className="text-2xl font-bold flex justify-start">{title}</h3>
        <p className="text-white/90 mt-2 mb-6">{description}</p>
      </div>

      <button 
        onClick={handleStart}
        className={`bg-white font-bold px-4 py-2 rounded-xl w-fit transform transition duration-300 hover:scale-105 ${btnTextColor}`}>
        START +1 ❤️
      </button>

      <div className={`absolute opacity-100 ${imgStyle}`}>
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default SubjectCard;
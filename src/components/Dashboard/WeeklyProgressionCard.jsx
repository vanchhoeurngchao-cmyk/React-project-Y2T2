import React from 'react';

function WeeklyProgressCard({ subject, score, sessions }) {
  const scoreColor = score >= 70 ? 'text-green-500' : 'text-red-500';
  const sessionColor = sessions >= 3 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-gray-200 mb-1">
      <h3 className="mb-2 text-gray-800 text-lg font-semibold">{subject}</h3>
      
      <p className="mb-1 text-gray-600">
        Score: <span className={`${scoreColor} font-bold`}>{score}%</span>
      </p>
      
      <p className="text-gray-600">
        Lesson: <span className={`${sessionColor} font-bold`}>
          {sessions} {sessions === 1 ? 'session' : 'sessions'}
        </span>
      </p>
    </div>
  );
}

export default WeeklyProgressCard;
import React from 'react';

function UnitHeader({ section, unit, description, stats = [], onNextUnit }) {
  return (
    <div className="bg-white border-2 border-b-8 border-gray-200 rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm transition-all hover:border-gray-300">
      
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-green-500 rounded-2xl border-b-4 border-green-700 flex items-center justify-center text-white font-black text-2xl shadow-sm">
          {unit}
        </div>
        
        <div>
          <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight">
            Section {section}, Unit {unit}
          </h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">
            {description || "Keep up the great work!"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        
        {stats.length > 0 && (
          <div className="flex gap-2">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl border-2 border-gray-100 shadow-sm"
              >
                <span className="text-xl">{stat.icon}</span>
                <span className={`font-black ${stat.textColor || 'text-gray-700'}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {onNextUnit && (
          <button 
            onClick={onNextUnit}
            className="flex-1 md:flex-none bg-blue-500 hover:bg-blue-400 text-white font-black py-3 px-6 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
          >
            Next Unit
            <span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default UnitHeader;
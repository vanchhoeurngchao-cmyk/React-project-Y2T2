import React from 'react'
import closedChest from '../../assets/MainPage/Dashboard/chest.png';
import openedChest from '../../assets/MainPage/Dashboard/opened_chest.png';

function DailyQuestsCard({ task, current, total, color, isComplete }) {
    const percentage = Math.min((current / total) * 100, 100);

    const progressBarColor = isComplete ? color : "#cecece";

    const displayImage = isComplete ? openedChest : closedChest;

    return (
        <div className="grid grid-cols-4 items-center bg-gray-100 rounded-2xl px-4 py-2">
            <div className="flex flex-col col-span-3">
                <span className="font-semibold text-gray-800">{task}</span>
                <div className="relative w-full bg-gray-300 rounded-full h-5 mt-2 overflow-hidden">
                    <div 
                        className="absolute left-0 top-0 h-full transition-all duration-500" 
                        style={{ 
                            width: `${percentage}%`, 
                            backgroundColor: progressBarColor 
                        }}
                    ></div>
                    
                    {/* Progress Text */}
                    <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${percentage > 50 ? 'text-white' : 'text-gray-600'}`}>
                        {current} / {total}
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={displayImage} alt="Quest Reward" className="w-16 h-16 object-contain" />
            </div>
        </div>
    );
}

export default DailyQuestsCard
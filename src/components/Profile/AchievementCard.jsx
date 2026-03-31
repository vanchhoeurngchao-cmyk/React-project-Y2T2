import React from 'react';

const AchievementCard = ({ image, title, description, progress, max, color }) => {
    // Calculate percentage for the width
    const percentage = (progress / max) * 100;

    return (
        <div className="flex px-5 py-5 gap-4 group hover:bg-gray-50 transition-colors cursor-default">
            {/* Achievement Icon Placeholder */}
            <div className="w-20 h-20 mt-1 group-hover:scale-105 transition-transform">
                <img src={image} alt="" />
            </div>

            <div className="flex flex-col space-y-3 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl text-gray-800">{title}</h1>
                    <span className="text-gray-400 font-bold">
                        {progress}/{max}
                    </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative w-full h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        className={`h-full ${color} rounded-full transition-all duration-700 ease-out`} 
                        style={{ width: `${percentage}%` }} 
                    />
                </div>

                <p className="text-gray-400 font-bold text-sm leading-tight">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AchievementCard;
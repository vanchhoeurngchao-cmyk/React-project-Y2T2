import React from 'react';
import leaderboardData from '../../data/Social/Leaderboard.json';

function Leaderboard() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-4">
            
            {/* League Header */}
            <div className="text-center space-y-1 border-b-2 border-gray-300 pb-2">
                <div className="flex justify-center gap-2 mb-2">
                    <div className="w-12 h-12 rounded-full bg-orange-300 opacity-60"></div>
                    <div className="w-12 h-12 rounded-full bg-blue-200 opacity-60"></div>
                    <div className="w-12 h-12 rounded-full bg-yellow-300 opacity-60"></div>
                    <div className="w-14 h-14 rounded-full bg-blue-300 flex items-center justify-center text-4xl">
                        💎
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 opacity-50"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 opacity-50"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 opacity-50"></div>
                </div>
                
                <h2 className="text-lg font-bold text-gray-800">
                    Epic League
                </h2>
                <p className="text-sm text-gray-500">
                    Top 8 advance to the next league
                </p>
                <p className="text-sm text-yellow-500 font-semibold">
                    5 days
                </p>
            </div>

            {/* RANK LIST */}
            <div className="space-y-6">
                {leaderboardData.map((player) => (
                    <div 
                        key={player.rank} 
                        className={`flex items-center justify-between px-6 ${player.isLastTopThree ? 'border-b-2 border-gray-300 pb-5' : ''} ${player.rank > 3 ? 'pl-8' : ''}`}
                    >
                        <div className={`flex items-center ${player.rank > 3 ? 'gap-9' : 'gap-6'}`}>
                            
                            {/* Rank Number/Badge */}
                            <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${player.rank <= 3 ? `${player.rankColor} text-white` : player.rankColor}`}>
                                {player.rank}{player.rank > 3 ? '.' : ''}
                            </span>
                            
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-black select-none">
                                {player.initial}
                            </div>
                            
                            {/* Player Name */}
                            <span className={`font-bold text-lg ${player.rank > 3 ? '-ml-4' : ''} ${player.nameColor}`}>
                                {player.name}
                            </span>
                            
                        </div>
                        
                        {/* XP Score */}
                        <span className="text-md font-semibold text-gray-600">
                            {player.xp} XP
                        </span>
                        
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Leaderboard;
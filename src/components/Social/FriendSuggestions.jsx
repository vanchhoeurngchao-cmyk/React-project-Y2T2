import React from 'react';
import suggestions from '../../data/Social/FriendSuggestions.json';

function FriendSuggestions() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4">
            <h2 className="font-bold text-gray-700 mb-4">Friend Suggestions</h2>
            
            <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
                {suggestions.map((friend) => (
                    <div 
                        key={friend.id} 
                        className="min-w-35 bg-[#f7fdf9] border border-green-100 rounded-2xl p-4 flex flex-col items-center text-center"
                    >
                        <div className={`w-16 h-16 rounded-full ${friend.color} flex items-center justify-center text-white text-2xl font-black select-none mb-2`}>
                            {friend.initial}
                        </div>
                        
                        <h1 className="font-semibold text-sm mt-2">
                            {friend.name}
                        </h1>
                        
                        <span className="text-xs text-gray-400">
                            {friend.info}
                        </span>
                        
                        <button className="mt-3 bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-1 rounded-full transition-colors">
                            FOLLOW
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FriendSuggestions;
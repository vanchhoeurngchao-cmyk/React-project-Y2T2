import React, { useState } from 'react';
import FriendData from '../../data/Profile/FriendData.json';

function FriendList() {
    const [activeTab, setActiveTab] = useState('following');

    const renderList = (list) => {
        // Only show the first 3 friends as a preview
        const previewList = list.slice(0, 3);
        const hasMore = list.length > 3;

        if (list.length === 0) {
            return (
                <div className="flex justify-center items-center py-10">
                    <span className="font-bold text-gray-400">No one here yet</span>
                </div>
            );
        }

        return (
            <div className="flex flex-col">
                <div className="flex flex-col space-y-8 p-6">
                    {previewList.map((friend) => (
                        <div key={friend.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className={`w-12 h-12 rounded-full ${friend.color || 'bg-gray-200'} flex items-center justify-center text-white text-xl font-black`}>
                                    {friend.initial}
                                </div>
                                {/* Info */}
                                <div className="flex flex-col">
                                    <span className="text-md font-bold text-gray-800">{friend.name}</span>
                                    <span className="text-gray-400 font-bold text-sm">{friend.xp} XP</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer / View More */}
                <button className="flex justify-between items-center py-4 px-6 border-t-2 border-gray-100 hover:bg-gray-50 transition-colors">
                    <span className="text-blue-400 font-extrabold text-sm uppercase">
                        {hasMore ? `View ${list.length - 3} more` : 'View All'}
                    </span>
                    <span className="material-symbols-rounded text-lg text-blue-400 font-black">arrow_forward_ios</span>
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full bg-white rounded-3xl border-2 border-gray-300 overflow-hidden shadow-sm">
            {/* Tab Switcher */}
            <div className="flex justify-evenly border-b-2 border-gray-200">
                <button 
                    onClick={() => setActiveTab('following')}
                    className={`flex-1 py-4 font-bold text-sm tracking-widest transition-all ${
                        activeTab === 'following' 
                        ? 'text-blue-500 border-b-4 border-blue-500 -mb-0.5' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    FOLLOWING
                </button>
                <button 
                    onClick={() => setActiveTab('followers')}
                    className={`flex-1 py-4 font-bold text-sm tracking-widest transition-all ${
                        activeTab === 'followers' 
                        ? 'text-blue-500 border-b-4 border-blue-500 -mb-0.5' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    FOLLOWERS
                </button>
            </div>

            {/* List Content */}
            {activeTab === 'following' ? renderList(FriendData.following) : renderList(FriendData.followers)}
        </div>
    );
}

export default FriendList;
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import FriendSuggestions from '../components/Social/FriendSuggestions';
import PostCard from '../components/Social/PostCard';
import Leaderboard from '../components/Social/Leaderboard';
import postData from '../data/Social/Posts.json';

function Social() {
    // 'feed' is the default view for mobile
    const [activeTab, setActiveTab] = useState('feed');

    return (
        <MainLayout>
            <div className="main-content flex flex-col lg:grid lg:grid-cols-5 gap-4 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none">
                
                {/* Mobile Toggle Buttons */}
                <div className="flex gap-2 lg:hidden">
                    <button 
                        onClick={() => setActiveTab('feed')}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                            activeTab === 'feed' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        Feed
                    </button>
                    
                    <button 
                        onClick={() => setActiveTab('leaderboard')}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                            activeTab === 'leaderboard' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        Leaderboard
                    </button>
                </div>

                {/* Feed Section */}
                {/* Logic: Show if tab is 'feed' OR if we are on desktop (lg:flex) */}
                <div 
                    id="feedSection" 
                    className={`w-full lg:col-span-3 flex-col gap-4 overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden ${
                        activeTab === 'feed' ? 'flex' : 'hidden lg:flex'
                    }`}
                >
                    <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-800 px-2 mb-2">Feed</h1>
                        <div className="flex items-center gap-3">
                            <input 
                                type="text" 
                                placeholder="Search friends..." 
                                className="px-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                + Post
                            </button>
                        </div>
                    </div>

                    <FriendSuggestions />

                    {postData.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                <div 
                    id="leaderboardSection" 
                    className={`w-full lg:col-span-2 lg:block ${
                        activeTab === 'leaderboard' ? 'block' : 'hidden'
                    }`}
                >
                    <Leaderboard />
                </div>

            </div>
        </MainLayout>
    );
}

export default Social;
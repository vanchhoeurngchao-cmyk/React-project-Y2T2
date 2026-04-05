import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import MainLayout from '../layouts/MainLayout';
import StatCard from '../components/Profile/StatCard';
import Settings from '../components/Profile/Settings';
import AchievementCard from '../components/Profile/AchievementCard';
import ProfileHeader from '../components/Profile/ProfileHeader';
import FriendList from '../components/Profile/FriendList';
import FriendData from '../data/Profile/FriendData.json'
import profileData from '../data/Profile/ProfileData.json';

function Profile() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const { user, stats, achievements } = profileData;
    const {xp} = useUser();

    return (
        <MainLayout>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none pb-10">
                
                {/* LEFT COLUMN: Profile & Achievements (3/5 width) */}
                <div className={`md:col-span-3 flex flex-col w-full bg-white rounded-3xl p-6 ${isSettingsOpen ? 'hidden md:flex' : 'flex'}`}>
                    
                    <ProfileHeader 
                        user={user} 
                        onOpenSettings={() => setIsSettingsOpen(true)} 
                    />

                    {/* Stats Grid */}
                    <h3 className="font-extrabold text-3xl mt-10 mb-4 ml-2">Overview</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => {
                            const displayValue = stat.label === "Total XP" ? xp : stat.value;

                            return (
                                <StatCard 
                                    key={idx} 
                                    icon={stat.icon}
                                    label={stat.label}
                                    value={displayValue} 
                                />
                            );
                        })}
                    </div>

                    {/* Friend List - Visible on mobile*/}
                    <div class="flex flex-col lg:hidden">
                        <div class="flex justify-between">
                            <h3 class="font-extrabold text-3xl mt-10 mb-2 ml-2">Friends</h3>
                            <h3 class="font-extrabold text-lg mt-12 text-blue-300 mb-2 mr-2">ADD FRIENDS</h3>
                        </div>
                        {/* <!-- following side will show on small device first --> */}
                        <FriendList />
                    </div>

                    {/* Invite Fried Box */}
                    <div class="md:hidden bg-white rounded-3xl p-5 shadow-sm border-2 border-gray-300 flex flex-col gap-4 mt-10">
                        <div class="flex  items-start gap-4">
                            <div class="w-10 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-500">
                                <span class="material-symbols-rounded text-3xl">mail</span>
                            </div>
                            <h3 class="text-lg font-extrabold text-gray-900">
                                Invite friends
                            </h3>
                        </div>
                        <span class="text-sm text-gray-500 leading-snug px-1">
                            Tell your friends it’s free and fun to learn a language on L-Learning!
                        </span>
                        <button class="w-full py-3 rounded-xl bg-sky-500 text-white font-extrabold border-b-4 border-sky-600 transition-all duration-150 hover:bg-sky-400 hover:border-b-2 hover:translate-y-0.5 active:translate-y-0.5 active:border-b-0">
                            INVITE FRIENDS
                        </button>
                    </div>

                    {/* Achievements List */}
                    <div className="flex flex-col">
                        <div className="flex justify-between mt-12 mb-4 mx-2">
                            <h3 className="font-extrabold text-3xl text-gray-800 tracking-tight">Achievements</h3>
                            <button className="font-extrabold text-md text-blue-300 hover:text-blue-500 transition-colors mt-2 cursor-pointer duration-150 ease-out uppercase tracking-wider">
                                View All
                            </button>
                        </div>
                        
                        <div className="flex flex-col border-2 border-gray-300 rounded-3xl divide-y-2 divide-gray-300 overflow-hidden shadow-sm">
                            {achievements.map((ach) => (
                                <AchievementCard key={ach.id} {...ach} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Sidebar & Settings (2/5 width) */}
                <div className={`md:col-span-2 bg-white rounded-3xl flex-col p-6 ${isSettingsOpen ? 'flex' : 'hidden md:flex'}`}>
                    
                    {/* Friends Section - Visible only on Desktop */}
                    <div className="hidden md:flex flex-col border-2 border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                        <h3 className="font-extrabold text-xl mb-4 text-gray-700">Add friends</h3>
                        
                        <button className="flex justify-between items-center border-b border-gray-100 py-4 group hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-all">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-rounded scale-x-[-1] text-3xl text-gray-400 group-hover:text-blue-400">search</span>
                                <span className="font-bold text-lg text-gray-600">Find friends</span>
                            </div>
                            <span className="material-symbols-rounded text-xl text-gray-300 font-black">arrow_forward_ios</span>
                        </button>

                        <button className="flex justify-between items-center py-4 group hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-all">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-rounded text-3xl text-gray-400 group-hover:text-blue-400">mail</span>
                                <span className="font-bold text-lg text-gray-600">Invite friends</span>
                            </div>
                            <span className="material-symbols-rounded text-xl text-gray-300 font-black">arrow_forward_ios</span>
                        </button>
                    </div>

                    {/* Friends List Section - Visible only on Desktop */}
                    <div className='hidden md:block mb-6'>
                        <FriendList />
                    </div>

                    {/* Settings Component */}
                    <div className="relative flex flex-col md:border-t-2 md:border-gray-400 md:mt-10 justify-center py-4 space-y-8">
                        <h1 className="hidden md:block font-bold text-3xl text-gray-600 text-center">Settings</h1>
                        <Settings 
                            isOpen={isSettingsOpen} 
                            onClose={() => setIsSettingsOpen(false)} 
                        />
                    </div>
                </div>

            </div>
        </MainLayout>
    );
}

export default Profile;
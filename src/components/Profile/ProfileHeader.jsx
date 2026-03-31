import React from 'react';

const ProfileHeader = ({ user, onOpenSettings }) => {
    return (
        <div className="w-full">
            {/* Banner Area */}
            <div className="relative w-full bg-[#E6F6FF] rounded-t-3xl p-6 min-h-55 flex items-center justify-center overflow-hidden border-2 border-gray-100">
                {/* Mobile Settings Toggle */}
                <div className="absolute top-5 left-5 md:hidden">
                    <button 
                        onClick={onOpenSettings}
                        className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-black hover:text-gray-400 border-2 border-b-4 border-gray-300 px-6 py-6  duration-150 ease-out active:translate-y-0.5 active:border-b-2 hover:translate-y-0.5 hover:border-b-2 transition-all"
                    >
                        <span className="material-symbols-rounded">settings</span>
                    </button>
                </div>

                {/* Edit Button */}
                <div class="absolute top-5 right-5">
                    <button class="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-black hover:text-gray-400 border-2 border-b-4 border-gray-300 px-6 py-6 transition-all duration-150 ease-out hover:translate-y-0.5 hover:border-b-2 active:translate-y-0.5 active:border-b-2">
                        <span class="material-symbols-rounded">edit</span>
                    </button>
                </div>

                {/* Avatar */}
                <div className="relative flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-4 border-dashed border-sky-400 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                        {/* Static Inner Circle */}
                        <div className="w-32 h-32 rounded-full bg-sky-300 flex items-center justify-center animate-none">
                            <span className="text-white text-4xl font-black">{user.name.charAt(0)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Identity Info */}
             <div class="flex flex-col item-center text-center">
                    <h2 class="text-2xl font-bold mt-3">{user.name}</h2>
                    <p class="text-gray-500 text-md -mt-1">{user.username}</p>
                </div>

            {/* Social Stats */}
            <div class="flex justify-evenly w-full mt-6">
                <div class="text-center">
                    <h3 class="font-bold text-lg">6</h3>
                    <p class="text-sm text-gray-500">Following</p>
                </div>
                <div class="text-center">
                    <h3 class="font-bold text-lg">0</h3>
                    <p class="text-sm text-gray-500">Follower</p>
                </div>
                <div class="text-center">
                    <h3 class="font-bold text-lg">2.3B</h3>
                    <p class="text-sm text-gray-500">Likes</p>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-[50%] bg-gray-200 text-md text-center rounded-full px-2 py-2 mt-5">
                    + Add bio . <span>I'm a high school student...</span>
                </div>
            </div>
            <div class="grid grid-cols-5 md:hidden gap-2 p-2 border-b-2 border-gray-300 mt-5 pb-5">
                {/* Add Friend Button */}
                <button class="col-span-4 flex items-center justify-center gap-2 font-extrabold border-2 border-gray-300 border-b-4 hover:border-b-2 text-black hover:text-gray-400 transition-all duration-150 ease-out hover:translate-y-0.5 rounded-xl py-2 px-4 bg-transparent">
                    <span class="material-symbols-rounded text-xl">person_add</span>
                    ADD FRIENDS
                </button>
                {/* QR Code Button */}
                <button class="col-span-1 flex items-center justify-center font-extrabold border-2 border-gray-300 border-b-4 hover:border-b-2 text-black hover:text-gray-400 transition-all duration-150 ease-out hover:translate-y-0.5 rounded-xl py-2 px-4 bg-transparent">
                    <span class="material-symbols-rounded text-xl">qr_code</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileHeader;
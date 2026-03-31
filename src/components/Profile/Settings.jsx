import React from 'react';
import { Link } from 'react-router-dom';

const Settings = ({ isOpen, onClose }) => {
    const accountItems = [
        "Preferences",
        "Profile",
        "Notification",
        "Courses",
        "Social Accounts",
        "Privacy Setting"
    ];

    return (
        <div className={`flex-col ${isOpen ? 'flex w-full' : 'hidden md:flex'}`}>
            
            {/* Settings Header (Visible only on Mobile when toggled) */}
            <div className="relative flex border-b-2 border-gray-300 pb-2 mb-8 md:hidden">
                <h1 className="w-full text-center font-bold text-3xl text-gray-600">Settings</h1>
                <button 
                    onClick={onClose}
                    className="absolute right-1 top-2 text-blue-400 font-bold text-lg hover:text-blue-500"
                >
                    DONE
                </button>
            </div>

            {/* Account Section */}
            <div id="settings-section" className="flex flex-col">
                <h2 className="font-bold text-2xl text-gray-500 mb-2 ml-1">Account</h2>
                <div className="flex flex-col border-2 border-gray-300 rounded-2xl overflow-hidden">
                    {accountItems.map((item, index) => (
                        <div 
                            key={index}
                            className={`flex justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                                index !== accountItems.length - 1 ? 'border-b border-gray-200' : ''
                            }`}
                        >
                            <h3 className="font-bold text-lg text-gray-700">{item}</h3>
                            <span className="material-symbols-rounded text-xl text-gray-400 font-extrabold">
                                arrow_forward_ios
                            </span>
                        </div>
                    ))}
                </div>

                {/* Support Section */}
                <h2 className="font-bold text-2xl text-gray-500 mt-6 mb-2 ml-1">Support</h2>
                <div className="flex justify-between border-2 border-gray-300 rounded-2xl px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <h3 className="font-bold text-xl text-gray-700">Help Center</h3>
                    <span className="material-symbols-rounded text-xl text-gray-400 font-extrabold">
                        arrow_forward_ios
                    </span>
                </div>

                {/* Log Out Button */}
                <Link to="/login" className="w-full mt-6">
                    <button className="w-full py-3 text-blue-300 font-extrabold text-xl border-2 border-b-4 border-gray-300 rounded-3xl transition-all duration-150 ease-out hover:translate-y-0.5 hover:border-b-2 hover:text-blue-400 active:translate-y-1 active:border-b-0">
                        LOG OUT
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Settings;
import React from 'react';

const StatCard = ({ icon, value, label }) => (
    <div className="flex border-2 border-gray-300 rounded-2xl px-4 py-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex flex-col">
            <span className="text-lg font-bold">{value}</span>
            <span className="text-gray-400 font-bold -mt-1">{label}</span>
        </div>
    </div>
);

export default StatCard;
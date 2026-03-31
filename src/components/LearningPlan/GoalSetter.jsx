import React, { useState } from 'react';

function GoalSetter({ onAddGoal }) {
    const [goalName, setGoalName] = useState('');
    const [goalTarget, setGoalTarget] = useState('');

    const handleAddGoal = () => {
        if (goalName.trim() && goalTarget.trim()) {
            onAddGoal({
                id: Date.now(),
                name: goalName,
                target: parseInt(goalTarget),
                current: 0,
                completed: false
            });
            setGoalName('');
            setGoalTarget('');
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-md px-6 py-6 h-107.5 flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-center">
                Set Monthly Goal
            </h3>
            
            <div className="space-y-4">
                <input 
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    type="text" 
                    placeholder="Goal Name (e.g. Complete Lessons)" 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                />
                
                <input 
                    value={goalTarget}
                    onChange={(e) => setGoalTarget(e.target.value)}
                    type="number" 
                    placeholder="Target Number (e.g. 10)" 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                />
                
                <button 
                    onClick={handleAddGoal} 
                    className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition transform active:scale-95 shadow-md"
                >
                    Create New Goal +
                </button>
            </div>
            
            <p className="mt-auto text-sm text-gray-400 text-center italic pt-4">
                "A goal without a plan is just a wish."
            </p>
        </div>
    );
}

export default GoalSetter;
import React, { useState, useEffect } from 'react';

function GoalContainer({ refreshTrigger }) {
    const [goals, setGoals] = useState([]);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const loadGoals = () => {
            const savedGoals = localStorage.getItem('monthly_goals');
            
            if (savedGoals) {
                setGoals(JSON.parse(savedGoals));
            }
        };
        
        loadGoals();
    }, [refreshTrigger]);

    useEffect(() => {
        localStorage.setItem('monthly_goals', JSON.stringify(goals));
    }, [goals]);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
            const diff = endOfMonth - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            
            setTimeLeft(`${days}D`);
        };
        
        updateTimer();
        const timer = setInterval(updateTimer, 60000);
        
        return () => clearInterval(timer);
    }, []);

    const updateGoalProgress = (goalId, increment) => {
        setGoals(prevGoals => prevGoals.map(goal => {
            if (goal.id === goalId) {
                const newCurrent = Math.min(goal.current + increment, goal.target);
                const completed = newCurrent >= goal.target;
                
                return { ...goal, current: newCurrent, completed };
            }
            return goal;
        }));
    };

    const claimReward = (goalId) => {
        console.log(`Claiming reward for goal ID: ${goalId}`);
        alert('Reward claimed! 🎉');
    };

    const getGoalColor = (index) => {
        const colors = [
            { bg: 'bg-purple-500', hover: 'hover:bg-purple-600' },
            { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
            { bg: 'bg-green-500', hover: 'hover:bg-green-600' },
            { bg: 'bg-red-500', hover: 'hover:bg-red-600' },
            { bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
            { bg: 'bg-pink-500', hover: 'hover:bg-pink-600' },
        ];
        
        return colors[index % colors.length];
    };

    return (
        <div className="relative bg-white rounded-3xl shadow-md px-6 py-6 h-107.5 flex items-start justify-center text-lg font-semibold overflow-y-auto">
            {/* Timer */}
            <div className="absolute top-4 right-6 text-red-500 px-3 py-1 rounded-xl font-bold flex items-center gap-2 text-md">
                <span className="material-symbols-rounded text-base">
                    schedule
                </span>
                <span>
                    {timeLeft}
                </span>
            </div>
            
            <div className="w-full">
                <h3 className="text-xl max-[768px]:text-lg font-bold mb-6 text-center">
                    Monthly Goals
                </h3>
                
                <div className="space-y-4">
                    {goals.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                            <p>No goals set yet!</p>
                            <p className="text-sm mt-2">
                                Use the form to create your first goal
                            </p>
                        </div>
                    ) : (
                        goals.map((goal, index) => {
                            const percentage = (goal.current / goal.target) * 100;
                            const color = getGoalColor(index);
                            
                            return (
                                <div 
                                    key={goal.id} 
                                    className="bg-gray-200 p-4 rounded-xl shadow flex flex-col relative overflow-hidden"
                                >
                                    <div className="relative">
                                        <div className="mb-4">
                                            <p className="font-semibold text-lg">
                                                {goal.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Progress: {goal.current} / {goal.target}
                                            </p>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="relative w-full h-6 bg-gray-300 rounded-full mt-1 overflow-hidden">
                                            <div 
                                                className={`h-6 ${color.bg} rounded-full transition-all duration-500`} 
                                                style={{ width: `${percentage}%` }}
                                            />
                                            
                                            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                                                {goal.current} / {goal.target}
                                            </span>
                                        </div>
                                        
                                        {/* Decorative Image */}
                                        <img 
                                            src="../../image/main pic/4learning plan/Big-Chest-Sparkles-1.png" 
                                            className="absolute -top-12 -right-1 w-30 h-30 opacity-80 pointer-events-none"
                                            alt="reward chest"
                                        />
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mt-4">
                                        {!goal.completed && (
                                            <button 
                                                onClick={() => updateGoalProgress(goal.id, 1)}
                                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-bold transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                                            >
                                                +1 Progress
                                            </button>
                                        )}
                                        
                                        <button 
                                            onClick={() => claimReward(goal.id)}
                                            disabled={!goal.completed}
                                            className={`flex-1 py-2 rounded-xl font-bold transition-all duration-200 ${
                                                goal.completed 
                                                    ? `${color.bg} ${color.hover} text-white hover:-translate-y-1 hover:shadow-lg` 
                                                    : 'bg-gray-400 cursor-not-allowed text-gray-200'
                                            }`}
                                        >
                                            {goal.completed ? 'Claim Reward 🎁' : 'Locked 🔒'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

export default GoalContainer;
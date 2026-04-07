import React from 'react';
import MainLayout from '../layouts/MainLayout';
import GoalSetter from '../components/LearningPlan/GoalSetter';
import GoalContainer from '../components/LearningPlan/GoalContainer';
import Schedule from '../components/LearningPlan/Schedule';

import { useLearningGoals } from '../hooks/LearningPlan/useLearningGoal';

function LearningPlan() {
    const { goals, timeLeft, addGoal, updateProgress, claimReward, deleteGoal } = useLearningGoals();

    const totalCurrent = goals.reduce((acc, g) => acc + g.current, 0);
    const totalTarget = goals.reduce((acc, g) => acc + g.target, 0);
    const goalPercentage = totalTarget > 0 ? Math.round((totalCurrent / totalTarget) * 100) : 0;

    return (
        <MainLayout>
            <div className="main-content flex flex-col h-full overflow-y-auto p-0 [&::-webkit-scrollbar]:hidden scrollbar-none">
                
                <div className="bg-white border-2 border-b-8 border-gray-200 rounded-3xl p-8 mb-8 flex items-center justify-between shadow-sm transition-all hover:border-gray-300">
                    <div className="flex items-center gap-6">
                        {/* Smaller, cleaner icon box */}
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl border-2 border-purple-200 flex items-center justify-center shadow-inner">
                            <span className="material-symbols-rounded text-4xl text-purple-600 font-light">
                                flag
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-gray-800 tracking-tight uppercase leading-none">
                                Learning Plan
                            </h3>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="w-32 h-2.5 bg-gray-100 rounded-full border border-gray-200 overflow-hidden">
                                    <div 
                                        className="h-full bg-purple-500 transition-all duration-1000" 
                                        style={{ width: `${goalPercentage}%` }}
                                    />
                                </div>
                                <p className="text-xs font-black text-purple-600 uppercase">
                                    {goalPercentage}% Complete
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Today's Focus</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-gray-700">Level Up</span>
                            <span className="material-symbols-rounded text-yellow-500">grade</span>
                        </div>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 gap-5 flex-1">
                    <div className="grid grid-cols-2 gap-5 max-[768px]:grid-cols-1 items-start">
                        <GoalSetter onAddGoal={addGoal} />
                        
                        <GoalContainer 
                            goals={goals} 
                            timeLeft={timeLeft} 
                            onUpdateProgress={updateProgress} 
                            onClaimReward={claimReward}
                            onDeleteGoal={deleteGoal}
                        />
                    </div>
                    <Schedule />
                </div>
            </div>
        </MainLayout>
    );
}

export default LearningPlan;
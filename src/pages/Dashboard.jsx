import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContextInstance';

import MainLayout from '../layouts/MainLayout';
import DailyQuestsCard from '../components/Dashboard/DailyQuestsCard';
import CurrentLessonCard from '../components/Dashboard/CurrentLessonCard';
import WeeklyProgressCard from '../components/Dashboard/WeeklyProgressionCard';

import { useTimer } from '../hooks/Dashboard/useTimer';

import questsData from '../data/Dashboard/DailyQuestsData.json';
import lessonsData from '../data/Dashboard/CurrentLessonData.json';

function Dashboard() {
    const timeLeft = useTimer();
    const [dailyQuests, setDailyQuests] = useState([]);
    const { weeklyProgress, xp } = useContext(UserContext);

    const completedTasksCount = dailyQuests.filter(q => q.current >= q.total).length;
    const goalPercentage = dailyQuests.length > 0 ? Math.round((completedTasksCount / dailyQuests.length) * 100) : 0;

    const hours = new Date().getHours();
    const timeGreeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

    useEffect(() => {
        const initializeQuests = () => {
            const shuffled = [...questsData].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            setDailyQuests(selected);
        };
        initializeQuests();
    }, []);

    return (
        <MainLayout>
            <main className="main-content flex flex-col h-full overflow-y-auto p-0 [&::-webkit-scrollbar]:hidden scrollbar-none">
                {/* HEADER */}
                <div className="bg-white border-2 border-b-8 border-gray-200 rounded-3xl p-8 mb-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:border-gray-300">
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 bg-blue-500 rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden text-white">
                                <span className="material-symbols-rounded text-6xl">face</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white shadow-sm">
                                LVL 12
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">
                                {timeGreeting}, Explorer
                            </p>
                            <h3 className="text-3xl font-black text-gray-800 tracking-tight leading-none">
                                Welcome back!!
                            </h3>
                            <p className="text-sm font-bold text-gray-500 mt-2">
                                You've finished <span className="text-green-500">{goalPercentage}%</span> of your quests today.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 max-w-xs w-full bg-gray-50 p-4 rounded-2xl border-2 border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase">Daily Momentum</span>
                            <span className="text-[10px] font-black text-green-500">{goalPercentage}%</span>
                        </div>
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden border-b-2 border-black/5">
                            <div 
                                className="h-full bg-green-500 transition-all duration-1000 ease-out" 
                                style={{ width: `${goalPercentage}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center px-4 py-2 bg-orange-50 rounded-2xl border-2 border-orange-100 min-w-17.5">
                            <span className="material-symbols-rounded text-orange-500">local_fire_department</span>
                            <span className="text-lg font-black text-orange-600">43</span>
                        </div>
                        <div className="flex flex-col items-center px-4 py-2 bg-blue-50 rounded-2xl border-2 border-blue-100 min-w-17.5">
                            <span className="material-symbols-rounded text-blue-500">bolt</span>
                            <span className="text-lg font-black text-blue-600">{xp}</span>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-5 flex-1">
                    <div className="grid grid-cols-2 gap-5 items-start max-[768px]:grid-cols-1">
                        
                        {/* Daily Quests */}
                        <div className="relative bg-white rounded-3xl shadow-md border-2 border-gray-100 px-6 py-6 min-h-75">
                            <div className="absolute top-4 right-6 text-red-500 px-3 py-1 rounded-xl font-bold flex items-center gap-2 text-sm">
                                <span className="material-symbols-rounded text-base">schedule</span>
                                <span>{timeLeft}</span>
                            </div>
                            <h3 className="text-xl font-black text-gray-800 mb-6 text-center uppercase tracking-tight">Daily Quests</h3>
                            
                            <div className="flex flex-col space-y-4">
                                {dailyQuests.map((quest) => (
                                    <DailyQuestsCard 
                                        key={quest.id}
                                        task={quest.task}
                                        current={quest.current}
                                        total={quest.total}
                                        color={quest.color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Current Lesson */}
                        <div className="bg-white rounded-3xl shadow-md border-2 border-gray-100 px-6 py-6 min-h-75">
                            <h3 className="text-xl font-black text-gray-800 mb-6 text-center uppercase tracking-tight">Current Lesson</h3>
                            <div className="space-y-4 max-h-92.5 overflow-y-auto pr-2 scrollbar-none">
                                {lessonsData.map((lesson) => (
                                    <CurrentLessonCard 
                                        key={lesson.id}
                                        title={lesson.title}
                                        topic={lesson.topic}
                                        progress={lesson.progress}
                                        color={lesson.color}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Weekly Progression */}
                    <div className="bg-white rounded-3xl shadow-md border-2 border-gray-100 px-6 py-8 min-h-87.5 flex flex-col mb-6">
                        <h3 className="text-xl font-black text-gray-800 mb-8 text-center uppercase tracking-tight">Weekly Progression</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {weeklyProgress.map((item) => (
                                <WeeklyProgressCard 
                                    key={item.id}
                                    subject={item.subject}
                                    score={item.score}
                                    sessions={item.sessions}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default Dashboard;
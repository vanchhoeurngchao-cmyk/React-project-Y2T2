import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import DailyQuestsCard from '../components/Dashboard/DailyQuestsCard';
import CurrentLessonCard from '../components/Dashboard/CurrentLessonCard';
import WeeklyProgressCard from '../components/Dashboard/WeeklyProgressionCard';
import questsData from '../data/Dashboard/DailyQuestsData.json';
import lessonsData from '../data/Dashboard/CurrentLessonData.json';
import weeklyData from '../data/Dashboard/WeeklyProgressionData.json';

function Dashboard() {
  const [timeLeft, setTimeLeft] = useState("");

  const [dailyQuests, setDailyQuests] = useState([]);

  const completedTasksCount = dailyQuests.filter(q => q.current >= q.total).length;
  const goalPercentage = dailyQuests.length > 0 ? Math.round((completedTasksCount / dailyQuests.length) * 100) : 0;

  useEffect(() => {
    const initializeQuests = () => {
        const today = new Date().toDateString();
        const savedData = localStorage.getItem("daily_quests_state");
        const parsedData = savedData ? JSON.parse(savedData) : null;

        if (parsedData && parsedData.date === today){
            setDailyQuests(parsedData.quests);
        }else{
            const shuffled = [...questsData].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4).map(quest => ({...quest, current: 0}));

            localStorage.setItem("daily_quests_state", JSON.stringify({
                date: today,
                quests: selected
            }));    
            
            setDailyQuests(selected);
        }
    }
    initializeQuests();

    const updateTimer = () => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = endOfDay - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${hours}H ${minutes}M`);
    };
    updateTimer();
    const timer = setInterval(updateTimer, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MainLayout>
        <main className="main-content flex flex-col h-full overflow-y-auto p-0 [&::-webkit-scrollbar]:hidden scrollbar-none">
            {/* Header */}
            <div className="bg-gray-100 rounded-2xl p-12 shadow-md mb-5 flex items-center gap-4">
                <div>
                    <h3 class="text-[30px] font-bold">Welcome back user!!</h3>
                    <p class="text-md text-gray-500">you have completed {goalPercentage}% of your learning goal</p>
                </div>
            </div> 

            {/* Grid Section */}
            <div className="grid grid-cols-1 gap-5 flex-1">
                {/* Top */}
                <div className="grid grid-cols-2 gap-5 items-start max-[768px]:grid-cols-1">
                    {/* Daily Quest */}
                    <div className="relative bg-white rounded-3xl shadow-md px-6 py-6 min-h-75 text-lg font-semibold">
                        <div id="daily-timer" class="absolute top-4 right-6 text-red-500 px-3 py-1 rounded-xl font-bold flex items-center gap-2 text-sm">
                            <span class="material-symbols-rounded text-base">schedule</span>
                            <span id="daily-hours">{timeLeft}</span>
                        </div>
                        <h3 className="text-xl max-[768px]:text-lg font-bold mb-4 text-center">Daily Quests</h3>
                        {/* Quest */}
                        <div className="flex flex-col space-y-4">
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
                    </div>

                    {/* Current Lesson */}
                    <div className="bg-white rounded-3xl shadow-md px-6 py-6 min-h-75 flex items-start justify-center text-lg font-semibold">
                        <div className="w-full text-center">
                            <h3 class="text-xl max-[768px]:text-lg font-bold mb-4">Current Lesson</h3>
                            <div class="space-y-4 max-h-92.5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
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
                </div>

                {/* Bottom & Weekly Progression*/}
                <div className="bg-white rounded-3xl shadow-md px-6 py-3 min-h-87.5 flex flex-col gap-5 mb-1 pb-6">
                    <h3 class="text-xl max-[768px]:text-lg font-bold my-3 text-center">Weekly Progression</h3>
                    <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 max-[768px]:grid-cols-2 max-[600px]:grid-cols-1 mt-6 flex-1 overflow-y-auto">
                        {weeklyData.map((item) => (
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
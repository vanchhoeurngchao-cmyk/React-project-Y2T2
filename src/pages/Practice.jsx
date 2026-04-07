import React from 'react';
import MainLayout from '../layouts/MainLayout';
import UnitHeader from '../components/Classes&Practice/UnitHeader';
import ExerciseCard from '../components/Practice/ExerciseCard';
import PracticeCardData from '../data/Practice/PracticeCardData.json';
import { useUser } from '../hooks/useUser';

function Practice() {
  const { hearts, xp } = useUser();

  const practiceStats = [
    { icon: "❤️", value: hearts, textColor: "text-red-500" },
    { icon: "⚡", value: xp, textColor: "text-yellow-500" }
  ];

  return (
    <MainLayout>
      <div className="main-content flex flex-col h-full overflow-y-auto p-0 scrollbar-none">
        
        <UnitHeader 
          section="1" 
          unit="1" 
          description="Daily Practice Session" 
          stats={practiceStats}
          onNextUnit={() => alert("Loading next practice...")}
        />

        <div className="bg-white rounded-3xl shadow-md p-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 flex-1 mb-1 border-2 border-gray-100">
          {PracticeCardData.map((item) => (
            <ExerciseCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Practice;
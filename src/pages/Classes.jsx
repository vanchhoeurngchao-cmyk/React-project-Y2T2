import React from 'react';
import MainLayout from '../layouts/MainLayout';
import UnitHeader from '../components/Classes&Practice/UnitHeader';
import SubjectCard from '../components/Classes/SubjectCard';
import SubjectData from '../data/Classes/SubjectData.json';
import { useUser } from '../hooks/useUser';

function Classes() {

    const { hearts, xp } = useUser();

    const Stats = [
    { icon: "❤️", value: hearts, textColor: "text-red-500" },
    { icon: "⚡", value: xp, textColor: "text-yellow-500" }
    ];

    const handleNextUnit = () => {
        console.log("Navigating to next lesson...");
    };

  return (
    <MainLayout>
      <div className="main-content flex flex-col h-full p-0 overflow-y-auto scrollbar-none">
        
        <UnitHeader 
          section="1" 
          unit="1" 
          description="Grammar & Vocabulary Basics"
          stats={Stats}
          onNextUnit={handleNextUnit}
        />

        <div className="bg-white rounded-3xl shadow-md p-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 flex-1 mb-1 border-2 border-gray-100">
          {SubjectData.map((subject) => (
            <SubjectCard key={subject.id} data={subject} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Classes;
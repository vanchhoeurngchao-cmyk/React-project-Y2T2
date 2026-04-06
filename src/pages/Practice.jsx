import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ExerciseCard from '../components/Practice/ExerciseCard'

import PracticeCardData from '../data/Practice/PracticeCardData.json'

import { useUser } from '../hooks/useUser'

function Practice() {
    const { hearts, xp } = useUser();

    return (
        <MainLayout>
            <div className="main-content flex flex-col h-full overflow-y-auto p-0 [&::-webkit-scrollbar]:hidden scrollbar-none">
                {/* HEADER */}
                <div className="bg-gray-100 rounded-2xl p-12 shadow-md mb-5 flex items-center gap-4">
                    <div>
                        <h3 className="text-[30px] font-bold">SECTION 1, UNIT 1</h3>
                        <p className="text-md text-gray-500">-----------------</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2 border border-gray-200">
                            <span className="text-2xl">❤️</span>
                            <span className="text-xl font-black text-red-500">{hearts}</span>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2 border border-gray-200">
                            <span className="text-2xl">⚡</span>
                            <span className="text-xl font-black text-yellow-500">{xp}</span>
                        </div>
                    </div>
                </div>

                {/* PRACTICE GRID  */}
                <div className="bg-white rounded-3xl shadow-md p-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 max-[768px]:grid-cols-2 max-[600px]:grid-cols-1 flex-1 mb-1">
                    {PracticeCardData.map((item) =>(
                        <ExerciseCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default Practice
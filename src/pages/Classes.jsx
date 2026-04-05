import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SubjectCard from '../components/Classes/SubjectCard'
import SubjectData from '../data/Classes/SubjectData.json'
function Classes() {
  return (
    <MainLayout>
        <div className="main-content flex flex-col h-full p-0 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none">
            {/* Header */}
            <div className="bg-gray-100 rounded-2xl p-12 shadow-md mb-5 flex items-center gap-4">
                <div>
                    <h3 className="text-[30px] font-bold">SECTION 1, UNIT 1</h3>
                    <p className="text-md text-gray-500">-----------------</p>
                </div>
            </div>

            {/* Classes Grid */}
            <div className="bg-white rounded-3xl shadow-md p-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 max-[768px]:grid-cols-2 max-[600px]:grid-cols-1 flex-1 mb-1">
                {SubjectData.map((subject) => (
                    <SubjectCard key={subject.id} data={subject} />
                ))}
            </div>
        </div>
    </MainLayout>
  )
}

export default Classes

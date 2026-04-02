import React from 'react';
import scheduleData from '../../data/LearningPlan/ScheduleData.json';

function Schedule() {
  return (
    <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-sm px-6 py-8 mb-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 px-2">
        <h3 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
          Weekly Learning Schedule
        </h3>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-2xl font-extrabold shadow-[0_4px_0_0_#1b75d0] active:shadow-none active:translate-y-1 transition-all text-sm uppercase tracking-wider whitespace-nowrap">
          Edit Schedule
        </button>
      </div>

      <div className="rounded-2xl border-2 border-gray-100 overflow-hidden">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <table className="min-w-150 w-full table-auto text-base border-collapse">
            <thead className="bg-gray-50 border-b-2 border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-black text-gray-500 uppercase text-xs tracking-widest w-1/4">Day</th>
                <th className="px-6 py-4 text-left font-black text-gray-500 uppercase text-xs tracking-widest w-1/4">Subject</th>
                <th className="px-6 py-4 text-left font-black text-gray-500 uppercase text-xs tracking-widest w-1/4">Duration</th>
                <th className="px-6 py-4 text-center font-black text-gray-500 uppercase text-xs tracking-widest w-1/4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y-2 divide-gray-50 bg-white">
              {scheduleData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4 font-bold text-gray-700">{item.day}</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    <span className="bg-gray-100 group-hover:bg-white px-3 py-1 rounded-lg transition-colors inline-block">
                      {item.subject}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-bold">
                    {item.duration}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-400 hover:text-blue-600 font-black text-sm uppercase tracking-tighter transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD BUTTON */}
      <div className="mt-8 text-center">
        <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-2xl font-extrabold shadow-[0_4px_0_0_#189918] active:shadow-none active:translate-y-1 transition-all uppercase tracking-widest text-sm">
          + Add Schedule
        </button>
      </div>
    </div>
  );
}

export default Schedule;
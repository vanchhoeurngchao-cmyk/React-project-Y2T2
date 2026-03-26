import React from 'react'

function CurrentLessonCard({title, topic, progress, color}) {
  return (
    <div className="bg-gray-200 p-4 rounded-xl shadow">
        <p className="font-semibold">{title} – {topic}</p>
        <p className="text-sm text-gray-500">Progress: {progress}%</p>
        <div className="w-full h-5 bg-gray-300 rounded-full mt-4 overflow-hidden">
            <div className="h-5 rounded-full transition-all duration-500" style={{width: `${progress}%`, backgroundColor: color}}></div>
        </div>
        <button className="mt-4 w-full text-white py-2 rounded-xl font-bold transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:brightness-110" style={{background:color}}>
            Continue
        </button>
    </div>
  )
}   

export default CurrentLessonCard

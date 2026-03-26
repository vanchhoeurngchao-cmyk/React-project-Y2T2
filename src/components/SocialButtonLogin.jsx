import React from 'react'

function SocialButtonLogin({ icon, color }) {
  return (
    <button className="p-4 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-[#1faef6] transition-all transform hover:scale-110 active:scale-95">
        <i className={`${icon} ${color} text-xl`}></i>
    </button>
  );
}

export default SocialButtonLogin
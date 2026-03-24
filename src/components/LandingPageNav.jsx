import React from 'react'
import { Link } from 'react-router-dom'

function LandingPageNav() {
  return (
    <nav className='fixed top-0 w-full z-x1000 px-5 py-4 md:px-16 lg:px-15 flex justify-between items-center bg-white/50 border-b border-[#f7f7f7] backdrop-blur-[5px]'>
        <h2 className="font-['Fredoka'] text-2xl lg:text-[28px] font-bold text-[#58cc02]">
            L-Learning
        </h2>
        <div className='flex items-center gap-3'>
            <div className="hidden md:flex items-center gap-1 text-md text-[#4b4b4b]">
                <label htmlFor="site-lang">Site language:</label>
                <select id="site-lang" className="bg-transparent border-none cursor-pointer focus:outline-none focus:underline text-black">
                    <option value="en">English</option>
                    <option value="kh">Khmer</option>
                </select>
            </div>

            <Link to="/login">
                <button className="px-4 py-2 rounded-[20px] text-sm lg:text-[15px] bg-[#f7f7f7] text-[#4b4b4b] border border-[#f7f7f7] hover:text-[#58cc02] transition-colors">
                    Log in
                </button>
            </Link>
            <Link to="/login?mode=signup">
                <button className="px-4 py-2 rounded-[20px] text-sm lg:text-[15px] bg-[#58cc02] text-white hover:bg-[#ff9600] transition-colors">
                    Sign up
                </button>
            </Link>
        </div>
    </nav>
  )
}

export default LandingPageNav

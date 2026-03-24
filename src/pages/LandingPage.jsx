import React from 'react'
import LandingPageNav from '../components/LandingPageNav'
import { Link } from 'react-router-dom'
import underSeaBg from '../assets/LandingPage/under_sea.jpg'

function LandingPage() {
  return (
    <div className="min-h-screen font-['Fredoka'] text-white bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${underSeaBg})` 
    }}>
        <LandingPageNav />
        <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center p-5 pt-35 md:pt-40 mb-4.5">
            <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold leading-[1.2] mb-3.75 drop-shadow-lg">
            Learn a language for <span className="text-white">free.</span><br />
            Forever. Everywhere.
            </h1>
            
            <p className="text-[18px] lg:text-[22px] mb-3.75 font-medium drop-shadow-md">
                I want to learn...
            </p>
            
            <div className="flex flex-col md:flex-row gap-2.5 md:gap-7.5 w-full max-w-75 md:max-w-none md:w-auto">
                <div className="relative w-full md:w-auto">
                    <label htmlFor="language" className="sr-only">
                        Select language
                    </label>
                    <select id="language" className="w-full appearance-none py-3 pr-12 pl-6 rounded-[10px] border border-blue-300 text-black text-base lg:text-[18px] cursor-pointer shadow-lg outline-none focus:ring-2 focus:ring-blue-400">
                        <option>English</option>
                        <option>Khmer</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
                
                <Link to="/login" className="w-full md:w-auto px-5 py-3 lg:px-6.5 lg:py-3.5 rounded-[10px] bg-[#58cc02] hover:bg-[#ff9600] text-white text-base lg:text-[18px] transition-all font-bold uppercase shadow-lg active:translate-y-1 text-center inline-block">
                    Start Learning
                </Link>
            </div>
        </main>
        <footer className="text-white text-center px-5 pt-10 pb-10 bg-linear-to-t from-black/60 to-black/25 ">
            <div className="mb-12">
                <p className="text-[22px] md:text-[26px] lg:text-[28px] font-bold uppercase tracking-widest drop-shadow-md">
                    Over 200 MILLION users!
                </p>
            </div>
            <div className="max-w-150 md:max-w-175 lg:max-w-200 mx-auto mb-12">
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold mb-5">
                    The best new way to learn a language.
                </h2>
                <p className="text-sm md:text-base lg:text-[18px] leading-relaxed opacity-90">
                    Learning with Duolingo is fun and addictive. Earn points for correct answers, 
                    race against the clock, and level up.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold mb-3">L-Learning</h2>
                    <p className="text-sm opacity-80">
                        Learn languages in a fun and effective way anytime, anywhere.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/courses" className="hover:underline">Courses</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Languages</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li>English</li>
                        <li>Khmer</li>
                        <li>Coming soon...</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm opacity-70 mt-10 border-t border-white/20 pt-5">
                © 2026 L-Learning. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default LandingPage
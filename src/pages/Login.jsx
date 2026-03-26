import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SocialButtonLogin from '../components/SocialButtonLogin';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const params = new URLSearchParams(location.search);
    const isSignupMode = params.get('mode') === 'signup';

    const [isSignUpManual, setIsSignUpManual] = useState(null);

    const isSignUp = isSignUpManual !== null ? isSignUpManual : isSignupMode;
    
    const handleAuthSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            console.log("Registering user...");
            // Redirect to dashboard after 'registration'
            navigate('/dashboard'); 
        } else {
            console.log("Logging in user...");
            // Redirect to dashboard after 'login'
            navigate('/dashboard'); 
        }
    };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 font-['Fredoka'] p-4">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden w-full max-w-120 border border-gray-100 transition-all duration-500">
            
            <div className="flex bg-gray-50/50">
                <button 
                    onClick={() => setIsSignUpManual(false)}
                    className={`flex-1 py-5 font-bold tracking-wide transition-all ${!isSignUp ? 'text-[#1faef6] bg-white border-b-4 border-[#1faef6]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    LOG IN
                </button>
                <button 
                    onClick={() => setIsSignUpManual(true)}
                    className={`flex-1 py-5 font-bold tracking-wide transition-all ${isSignUp ? 'text-[#1faef6] bg-white border-b-4 border-[#1faef6]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    SIGN UP
                </button>
            </div>

            <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {isSignUp ? 'Create Account' : 'Welcome Back'}
                    </h1>
                    <p className="text-gray-500 text-sm">
                        {isSignUp ? 'Step into a world of learning' : 'Continue your daily streak!'}
                    </p>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-4">
                    {isSignUp && (
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="w-full px-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent focus:border-[#1faef6] focus:bg-white outline-none transition-all"
                            required
                        />
                    )}

                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full px-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent focus:border-[#1faef6] focus:bg-white outline-none transition-all"
                        required
                    />

                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full px-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent focus:border-[#1faef6] focus:bg-white outline-none transition-all"
                        required
                    />

                    {!isSignUp && (
                        <div className="text-right">
                            <a href="#" className="text-xs font-bold text-[#1faef6] hover:text-[#1896d4] uppercase tracking-tighter">Forgot Password?</a>
                        </div>
                    )}

                    <button className="w-full py-4 px-6 bg-[#1faef6] hover:bg-[#1896d4] text-white font-bold rounded-2xl shadow-[0_4px_0_#1896d4] active:shadow-none active:translate-y-1 transform transition-all uppercase tracking-widest mt-6">
                        {isSignUp ? 'Get Started' : 'Log In'}
                    </button>
                </form>

                <div className="mt-10">
                    <div className="relative flex items-center justify-center mb-8">
                        <div className="border-t w-full border-gray-200"></div>
                        <span className="bg-white px-4 text-[10px] font-bold text-gray-400 absolute uppercase tracking-[2px]">Social Connect</span>
                    </div>
                    
                    <div className="flex justify-center gap-6">
                        <SocialButtonLogin icon="fab fa-google" color="text-red-500" />
                        <SocialButtonLogin icon="fab fa-facebook-f" color="text-blue-600" />
                        <SocialButtonLogin icon="fab fa-github" color="text-gray-900" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login

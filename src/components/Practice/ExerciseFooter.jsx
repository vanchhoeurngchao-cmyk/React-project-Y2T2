import React from 'react';

function ExerciseFooter({ status, onCheck, onNext, disabled, correctAnswer }) {
    const hasResult = status === 'correct' || status === 'wrong';

    return (
        <div className={`fixed bottom-0 left-0 w-full p-8 border-t-2 transition-colors duration-300 ${
            status === 'correct' ? 'bg-green-100 border-green-200' : 
            status === 'wrong' ? 'bg-red-100 border-red-200' : 'bg-white border-gray-100'
        }`}>
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                
                <div className="flex flex-col">
                    {status === 'correct' && (
                        <div className="flex items-center gap-2 text-green-700">
                             <span className="material-symbols-rounded text-3xl">check_circle</span>
                             <span className="font-black text-2xl uppercase">Excellent!</span>
                        </div>
                    )}
                    {status === 'wrong' && (
                        <div className="flex items-center gap-2 text-red-700">
                             <span className="material-symbols-rounded text-3xl">cancel</span>
                             <div>
                                <p className="font-black text-2xl uppercase leading-none">Correct solution:</p>
                                <p className="font-bold text-lg">{correctAnswer}</p>
                             </div>
                        </div>
                    )}
                </div>

                <button
                    onClick={hasResult ? onNext : onCheck}
                    disabled={disabled && !hasResult}
                    className={`px-12 py-3 rounded-2xl font-black uppercase tracking-widest transition-all active:translate-y-1 shadow-[0_4px_0_0_rgba(0,0,0,0.2)]
                        ${hasResult ? 'bg-white' : 'bg-green-500 text-white'}
                        ${status === 'correct' ? 'text-green-600' : ''}
                        ${status === 'wrong' ? 'text-red-600' : ''}
                        ${disabled && !hasResult ? 'bg-gray-200 text-gray-400 shadow-none cursor-not-allowed' : 'hover:brightness-110'}
                    `}
                >
                    {hasResult ? 'Continue' : 'Check'}
                </button>
            </div>
        </div>
    );
}

export default ExerciseFooter;
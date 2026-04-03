import React from 'react';

function AnswerCard({ option, isSelected, status, isCorrect, onSelect }) {
    let styles = "border-gray-200 text-gray-700 hover:bg-gray-50 shadow-[0_4px_0_0_#e5e5e5]";
    
    if (isSelected) {
        styles = "border-blue-400 bg-blue-50 text-blue-500 shadow-[0_4px_0_0_#60a5fa]";
    }

    if (status === 'correct' && isCorrect) {
        styles = "border-green-500 bg-green-100 text-green-700 shadow-[0_4px_0_0_#22c55e]";
    } 
    else if (status === 'wrong' && isSelected && !isCorrect) {
        styles = "border-red-500 bg-red-100 text-red-700 shadow-[0_4px_0_0_#ef4444]";
    }

    return (
        <button
            onClick={onSelect}
            disabled={status === 'correct' || status === 'wrong'}
            className={`w-full p-5 text-left rounded-2xl border-2 font-bold text-xl transition-all active:translate-y-1 active:shadow-none ${styles}`}
        >
            {option}
        </button>
    );
}

export default AnswerCard;
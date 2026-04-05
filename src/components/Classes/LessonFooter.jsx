import React from 'react';

function LessonFooter({ onNext, isLastSlide }) {
  return (
    <div className="fixed bottom-0 left-0 w-full p-8 border-t-2 bg-white border-gray-100">
      <div className="max-w-4xl mx-auto flex justify-end">
        <button
          onClick={onNext}
          className="px-12 py-3 bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-[0_4px_0_0_#1d4ed8] hover:brightness-110 active:translate-y-1 active:shadow-none transition-all"
        >
          {isLastSlide ? 'Finish' : 'Continue'}
        </button>
      </div>
    </div>
  );
}

export default LessonFooter;
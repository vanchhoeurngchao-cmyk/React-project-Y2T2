import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

import LessonLayout from '../../layouts/LessonLayout';
import { useLesson } from '../../hooks/Classes/useLesson';
import LessonFooter from '../../components/Classes/LessonFooter';

import grammarData from '../../data/Classes/LessonUnit1/Grammar.json';
import vocabularyData from '../../data/Classes/LessonUnit1/Vocabulary.json';
import listeningData from '../../data/Classes/LessonUnit1/Listening.json';
import speakingData from '../../data/Classes/LessonUnit1/Speaking.json';
import readingData from '../../data/Classes/LessonUnit1/Reading.json';
import writingData from '../../data/Classes/LessonUnit1/Writing.json';
import conversationData from '../../data/Classes/LessonUnit1/Conversation.json';
import reviewData from '../../data/Classes/LessonUnit1/Review.json';

function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { addHearts, addXp } = useUser();

  const [hasRewarded, setHasRewarded] = useState(false);

  const dataMap = {
    "1": grammarData,
    "2": vocabularyData,
    "3": listeningData,
    "4": speakingData,
    "5": readingData,
    "6": writingData,
    "7": conversationData,
    "8": reviewData,
  };

  const selectedData = dataMap[id] || readingData;

  const { isFinished, progress, currentSlide, nextSlide, currentStep, totalSlides } = useLesson(selectedData);

  const handleNextAction = () => {
    addXp(10);
    const isLastSlide = currentStep === totalSlides - 1;

    if (isLastSlide && !hasRewarded) {
      addHearts(1);
      setHasRewarded(true);
    }

    nextSlide();
  };

  if (isFinished) {
    return (
      <LessonLayout progress={100}>
        <div className="flex flex-col items-center text-center mt-20 animate-in zoom-in duration-500">
          <span className="text-8xl mb-6">🌟</span>
          <h1 className="text-4xl font-black text-gray-800 mb-2">Lesson Complete!</h1>
          <p className="text-xl text-green-500 font-bold mb-10">
            Fantastic! You've earned +1 Heart ❤️
          </p>
          <button onClick={() => navigate('/Classes')} className="bg-blue-500 text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_5px_0_0_#1d4ed8] hover:brightness-110 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
            Back to Classes
          </button>
        </div>
      </LessonLayout>
    );
  }

  return (
    <LessonLayout progress={progress}>
      <div className="mb-32 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="w-48 h-48 bg-blue-50 rounded-3xl flex items-center justify-center text-8xl mb-8 border-2 border-blue-100 shadow-inner select-none">
          {currentSlide?.image}
        </div>

        <div className="text-center">
            <h2 className="text-4xl font-black text-gray-800 mb-4">
              {currentSlide?.heading}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {currentSlide?.content}
            </p>
        </div>
      </div>

      <LessonFooter 
        onNext={handleNextAction} 
        isLastSlide={currentStep === totalSlides - 1} 
      />
    </LessonLayout>
  );
}

export default LessonPage;
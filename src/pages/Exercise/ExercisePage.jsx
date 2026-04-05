import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExerciesLayout from '../../layouts/ExerciesLayout.jsx';
import AnswerCard from '../../components/Practice/AnswerCard';
import ExerciseFooter from '../../components/Practice/ExerciseFooter';
import { useExercise } from '../../hooks/Practice/useExercise';
import { useUser } from '../../hooks/useUser';

import listeningData from '../../data/Practice/ExerciseUnit1/Listening.json';
import grammarData from '../../data/Practice/ExerciseUnit1/Grammar.json';
import vocabData from '../../data/Practice/ExerciseUnit1/Vocabulary.json';
import speakingData from '../../data/Practice/ExerciseUnit1/Speaking.json';
import readingData from '../../data/Practice/ExerciseUnit1/Reading.json';
import writingData from '../../data/Practice/ExerciseUnit1/Writing.json';
import conversationData from '../../data/Practice/ExerciseUnit1/Conversation.json';

function ExercisePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addXp } = useUser();

  const dataMap = {
    "1": listeningData,
    "2": grammarData,
    "3": vocabData,
    "4": speakingData,
    "5": readingData,
    "6": writingData,
    "7": conversationData,
  };

  const selectedData = dataMap[id] || vocabData;

  const { currentQuestion, options, status, selectedAnswer, isFinished, score, progress, handleSelect, checkAnswer, nextQuestion } = useExercise(selectedData);

  const handleNextAction = () => {
    if (status === 'correct') {
      addXp(10);
    } 

    nextQuestion();
};

  if (isFinished) {
    return (
      <ExerciesLayout progress={100}>
        <div className="flex flex-col items-center text-center mt-20 animate-in zoom-in duration-500">
          <span className="text-8xl mb-6">🏆</span>
          <h1 className="text-4xl font-black text-gray-800 mb-2">Unit Complete!</h1>
          <p className="text-xl text-gray-500 font-bold mb-10">You earned {score} XP</p>
          <button onClick={() => navigate('/Practice')} className="bg-green-500 text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_5px_0_0_#15803d] active:translate-y-1 active:shadow-none transition-all">
            Continue
          </button>
        </div>
      </ExerciesLayout>
    );
  }

  return (
    <ExerciesLayout progress={progress}>
      <div className="mb-32">
        <h2 className="text-3xl font-black text-gray-800 mb-10">
          {currentQuestion?.question}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {options.map((opt, i) => (
            <AnswerCard 
              key={i}
              option={opt}
              isSelected={selectedAnswer === opt}
              status={status}
              isCorrect={opt === currentQuestion.correct}
              onSelect={() => handleSelect(opt)}
            />
          ))}
        </div>
      </div>

      <ExerciseFooter 
        status={status}
        onCheck={checkAnswer}
        onNext={handleNextAction}
        disabled={!selectedAnswer}
        correctAnswer={currentQuestion?.correct}
      />
    </ExerciesLayout>
  );
}

export default ExercisePage;
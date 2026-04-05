import { useState } from 'react';

export const useExercise = (data) => {
    const questions = data.questions;

    const generateShuffledOptions = (question) => {
        if (!question) return [];
        const shuffledIncorrect = [...question.incorrect]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        return [...shuffledIncorrect, question.correct]
            .sort(() => Math.random() - 0.5);
    };

    const [currentStep, setCurrentStep] = useState(0);
    const [status, setStatus] = useState('idle');
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    
    const [localScore, setLocalScore] = useState(0);

    const [options, setOptions] = useState(() => generateShuffledOptions(questions[0]));

    const currentQuestion = questions[currentStep];

    const handleSelect = (option) => {
        if (status === 'idle' || status === 'selected') {
            setSelectedAnswer(option);
            setStatus('selected');
        }
    };

    const checkAnswer = () => {
        if (selectedAnswer === currentQuestion.correct) {
            setStatus('correct');
            setLocalScore(prev => prev + 10);
        } else {
            setStatus('wrong');
        }
    };

    const nextQuestion = () => {
        if (currentStep < questions.length - 1) {
            const nextIndex = currentStep + 1;
            const nextQ = questions[nextIndex];

            setCurrentStep(nextIndex);
            setOptions(generateShuffledOptions(nextQ));
            setStatus('idle');
            setSelectedAnswer(null);
        } else {
            setIsFinished(true);
        }
    };

    return {
        currentQuestion,
        options,
        status,
        selectedAnswer,
        isFinished,
        score: localScore,
        progress: (currentStep / questions.length) * 100,
        handleSelect,
        checkAnswer,
        nextQuestion
    };
};
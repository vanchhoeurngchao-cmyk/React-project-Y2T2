import { useState } from 'react';

export const useLesson = (data) => {
    const slides = data.slides || [];
    
    const [currentStep, setCurrentStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentSlide = slides[currentStep];

    const nextSlide = () => {
        if (currentStep < slides.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    return {
        currentSlide,
        progress: ((currentStep + 1) / slides.length) * 100,
        isFinished,
        nextSlide,
        totalSlides: slides.length,
        currentStep
    };
};
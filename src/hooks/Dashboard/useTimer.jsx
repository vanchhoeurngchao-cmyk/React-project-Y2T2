import { useState, useEffect } from 'react';

export const useTimer = () => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();

            const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23,59,59);
            const diff = end - now;

            if (diff <= 0) {
                setTimeLeft("0H 0M");
                return;
            }

            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            
            setTimeLeft(`${hours}H ${minutes}M`);
        };

        updateTimer();
        const timer = setInterval(updateTimer, 60000);
        return () => clearInterval(timer);
    }, []);

    return timeLeft;
}
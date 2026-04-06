import React, { useState } from 'react';
import { UserContext } from './UserContextInstance';
import initialWeeklyData from '../data/Dashboard/WeeklyProgressionData.json';

export function UserProvider({ children }) {
  const [hearts, setHearts] = useState(5);
  const [xp, setXp] = useState(1900);

  const [weeklyProgress, setWeeklyProgress] = useState(
    initialWeeklyData.map(item => ({
      ...item,
      sessions: 0,
      score: 0
    }))
  );

  const addHearts = (amount) => setHearts((prev) => prev + amount);
  const loseHeart = () => setHearts((prev) => Math.max(0, prev - 1));
  const addXp = (amount) => setXp((prev) => prev + amount);

  const updateWeeklyStats = (subjectId, newScore) => {
    setWeeklyProgress((prevData) =>
      prevData.map((item) => {
        if (item.id === subjectId) {
          const updatedScore = item.sessions === 0 ? newScore : Math.round((item.score + newScore) / 2);

          return {
            ...item,
            score: updatedScore,
            sessions: item.sessions + 1
          };
        }
        return item;
      })
    );
  };

  const value = { hearts, xp, addHearts, loseHeart, addXp, weeklyProgress, updateWeeklyStats };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
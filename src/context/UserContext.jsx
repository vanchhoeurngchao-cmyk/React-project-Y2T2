import React, { useState } from 'react';
import { UserContext } from './UserContextInstance';

export function UserProvider({ children }) {
  const [hearts, setHearts] = useState(5);
  const [xp, setXp] = useState(1900);

  const addHearts = (amount) => setHearts((prev) => prev + amount);
  const loseHeart = () => setHearts((prev) => Math.max(0, prev - 1));
  const addXp = (amount) => setXp((prev) => prev + amount);

  const value = { hearts, xp, addHearts, loseHeart, addXp };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
import { useState, useEffect } from 'react';

export function useLearningGoals() {
	const [goals, setGoals] = useState([]);
	const [timeLeft, setTimeLeft] = useState('');

	const colors = [
		{ bg: 'bg-purple-500', border: 'border-purple-700' },
		{ bg: 'bg-yellow-500', border: 'border-yellow-700' },
		{ bg: 'bg-green-500', border: 'border-green-700' },
		{ bg: 'bg-red-500', border: 'border-red-700' },
		{ bg: 'bg-blue-500', border: 'border-blue-700' },
		{ bg: 'bg-pink-500', border: 'border-pink-700' },
	];

	useEffect(() => {
		const updateTimer = () => {
			const now = new Date();
			const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
			const diff = Math.ceil((endOfMonth - now) / (1000 * 60 * 60 * 24));
			setTimeLeft(`${diff}D`);
		};
		updateTimer();
	}, []);

	const addGoal = (name, target) => {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		const newGoal = {
			id: Date.now(),
			name,
			target: parseInt(target),
			current: 0,
			completed: false,
			color: randomColor
		};
		setGoals((prev) => [...prev, newGoal]);
	};

	const updateProgress = (goalId) => {
		setGoals((prev) => prev.map(goal => {
			if (goal.id === goalId) {
				const newCurrent = Math.min(goal.current + 1, goal.target);
				return { ...goal, current: newCurrent, completed: newCurrent >= goal.target };
			}
			return goal;
		}));
	};

	const deleteGoal = (goalId) => {
		setGoals((prev) => prev.filter(goal => goal.id !== goalId));
	};

	const claimReward = (goalId) => {
		alert('Reward claimed! 🎉');
		deleteGoal(goalId);
	};

	return { goals, timeLeft, addGoal, updateProgress, deleteGoal, claimReward };
}
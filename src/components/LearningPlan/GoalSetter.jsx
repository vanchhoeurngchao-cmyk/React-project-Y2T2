import React, { useState } from 'react';

function GoalSetter({ onAddGoal }) {
	const [name, setName] = useState('');
	const [target, setTarget] = useState('');

	const handleCreate = () => {
		if (name && target) {
			onAddGoal(name, target);
			setName('');
			setTarget('');
		}
	};

	return (
		<div className="bg-white rounded-3xl shadow-md px-6 py-6 h-107.5 flex flex-col">
			<h3 className="text-2xl font-bold mb-6 text-center">Set Monthly Goal</h3>
			<div className="space-y-4">
				<input 
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Goal Name (e.g. Complete Lessons)" 
					className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
				/>
				<input 
					value={target}
					onChange={(e) => setTarget(e.target.value)}
					type="number" 
					placeholder="Target Number (e.g. 10)" 
					className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
				/>
				<button 
					onClick={handleCreate}
					className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition active:scale-95 shadow-md"
				>
					Create New Goal +
				</button>
			</div>
		</div>
	);
}

export default GoalSetter;
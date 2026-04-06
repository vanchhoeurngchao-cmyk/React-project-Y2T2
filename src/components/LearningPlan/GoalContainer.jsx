import React from 'react';

function GoalContainer({ goals, timeLeft, onUpdateProgress, onClaimReward, onDeleteGoal }) {
	return (
		<div className="relative bg-white rounded-3xl shadow-md px-6 py-6 h-107.5 overflow-y-auto scrollbar-none">
			<div className="absolute top-4 right-6 text-red-500 font-bold flex items-center gap-2">
				<span className="material-symbols-rounded text-base">schedule</span>
				<span>{timeLeft}</span>
			</div>
			
			<h3 className="text-2xl font-bold mb-6 text-center tracking-tight">Monthly Goals</h3>
			
			<div className="space-y-4">
				{goals.length === 0 ? (
					<div className="text-center text-gray-400 py-10 border-2 border-dashed border-gray-200 rounded-2xl">
						<p className="font-medium text-sm">Your goal list is empty</p>
					</div>
				) : (
					goals.map((goal) => {
						const percentage = (goal.current / goal.target) * 100;
						return (
							<div key={goal.id} className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200 relative group">
								<button 
									onClick={() => onDeleteGoal(goal.id)}
									className="absolute -top-2 -right-2 bg-white text-gray-400 hover:text-red-500 w-8 h-8 rounded-full shadow-md border border-gray-100 flex items-center justify-center transition-colors"
								>
									<span className="material-symbols-rounded text-lg">close</span>
								</button>

								<div className="mb-3">
									<p className="font-black text-gray-800 uppercase text-sm tracking-wide">{goal.name}</p>
									<p className="text-xs font-bold text-gray-400">STATUS: {goal.current} / {goal.target}</p>
								</div>

								<div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden relative border-b-4 border-black/5">
									<div 
										className={`h-full transition-all duration-700 ease-out ${goal.color.bg}`}
										style={{ width: `${percentage}%` }}
									/>
								</div>

								<div className="mt-4">
									{goal.completed ? (
										<button 
											onClick={() => onClaimReward(goal.id)}
											className={`w-full py-2 rounded-xl font-black text-white uppercase tracking-widest shadow-lg active:translate-y-1 transition-all ${goal.color.bg} border-b-4 border-black/20`}
										>
											Claim Reward 🎁
										</button>
									) : (
										<button 
											onClick={() => onUpdateProgress(goal.id)}
											className="w-full bg-white text-blue-500 py-2 rounded-xl font-black uppercase tracking-widest border-2 border-blue-500 border-b-4 active:border-b-2 active:translate-y-0.5 transition-all text-xs"
										>
											+1 Progress
										</button>
									)}
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default GoalContainer;
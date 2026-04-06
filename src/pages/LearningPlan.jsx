import MainLayout from '../layouts/MainLayout';
import GoalSetter from '../components/LearningPlan/GoalSetter';
import GoalContainer from '../components/LearningPlan/GoalContainer';
import Schedule from '../components/LearningPlan/Schedule';

import { useLearningGoals } from '../hooks/LearningPlan/useLearningGoal';

function LearningPlan() {
	const { goals, timeLeft, addGoal, updateProgress, claimReward, deleteGoal } = useLearningGoals();

	return (
		<MainLayout>
			<div className="main-content flex flex-col h-full overflow-y-auto p-0 [&::-webkit-scrollbar]:hidden scrollbar-none">
				<div className="bg-gray-100 rounded-2xl p-12 shadow-md mb-5 flex items-center gap-4">
					<div>
						<h3 className="text-[30px] font-bold">
							Welcome back, user!!
						</h3>
						<p className="text-md text-gray-500">
							Stay consistent — small progress every day leads to big results 🚀
						</p>
					</div>
				</div>

				{/* Grid Section */}
				<div className="grid grid-cols-1 gap-5 flex-1">
					<div className="grid grid-cols-2 gap-5 max-[768px]:grid-cols-1">
						<GoalSetter onAddGoal={addGoal} />
						
						<GoalContainer 
							goals={goals} 
							timeLeft={timeLeft} 
							onUpdateProgress={updateProgress} 
							onClaimReward={claimReward}
                            onDeleteGoal={deleteGoal}
						/>
					</div>
					<Schedule />
				</div>
			</div>
		</MainLayout>
	);
}

export default LearningPlan;
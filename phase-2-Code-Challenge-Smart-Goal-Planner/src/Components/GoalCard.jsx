import React from "react";

function GoalCard({ goal, onUpdate, onDelete }) {
  const percentage = Math.min(
    (goal.savedAmount / goal.targetAmount) * 100,
    100
  ).toFixed(1);

  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const daysLeft = Math.ceil(
    (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );
  const isOverdue = daysLeft < 0 && !isCompleted;
  const isWarning = daysLeft <= 30 && !isCompleted;

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
  <h2 className="text-xl font-semibold text-gray-800">{goal.name}</h2>
  <p className="text-sm text-gray-500 mb-2">{goal.category}</p>
  <p className="mb-1">Target: <span className="font-medium">${goal.targetAmount}</span></p>
  <p className="mb-1"> Saved: <span className="font-medium">${goal.savedAmount}</span></p>
  <p className="mb-1"> Remaining: <span className="font-medium">${goal.targetAmount - goal.savedAmount}</span></p>

  <div className="w-full h-3 bg-gray-200 rounded-full mt-2 mb-2">
    <div className="h-full bg-green-500 rounded-full" style={{ width: `${percentage}%` }} />
  </div>

  <p className="text-sm">
    Status:{" "}
    <span className={
      isCompleted ? "text-green-600 font-semibold" :
      isOverdue ? "text-red-600 font-semibold" :
      isWarning ? "text-yellow-600 font-semibold" :
      "text-blue-600 font-semibold"
    }>
      {isCompleted ? "Complete" : isOverdue ? "Overdue" : isWarning ? "Ending Soon" : "In Progress"}
    </span>
  </p>

  <button onClick={() => onDelete(goal.id)} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
    Delete Goal
  </button>
</div>

  );
}

export default GoalCard;

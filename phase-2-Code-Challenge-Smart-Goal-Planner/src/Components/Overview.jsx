import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between text-sm text-gray-700 space-y-2 sm:space-y-0">
  <p>Total Goals: <span className="font-semibold">{totalGoals}</span></p>
  <p>Total Saved: <span className="font-semibold">${totalSaved}</span></p>
  <p>Completed: <span className="font-semibold">{completed}</span></p>
</div>

  );
}

export default Overview;

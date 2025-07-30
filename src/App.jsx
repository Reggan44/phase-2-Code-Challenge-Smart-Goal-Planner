import React, { useEffect, useState } from "react";
import GoalCard from "./Components/GoalCard";
import GoalForm from "./Components/GoalForm";
import DepositForm from "./Components/DepositForm";
import Overview from "./Components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://goal-planner-hxw8.onrender.com/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  function addGoal(newGoal) {
    fetch("https://goal-planner-hxw8.onrender.com/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals([...goals, data]));
  }

  function updateGoal(id, updatedFields) {
    fetch(`https://goal-planner-hxw8.onrender.com/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) =>
        setGoals(goals.map((goal) => (goal.id === id ? updatedGoal : goal)))
      );
  }

  function deleteGoal(id) {
    fetch(`https://goal-planner-hxw8.onrender.com/goals/${id}`, {
      method: "DELETE",
    }).then(() => setGoals(goals.filter((goal) => goal.id !== id)));
  }

  return (
  <div className="min-h-screen bg-Charleston Green -100 text-gray-800 p-6">
    <h1 className="text-3xl font-bold mb-6 text-center text-blue-600"> Smart Goal Planner</h1>
    <div className="max-w-4xl mx-auto space-y-6">
      <Overview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <div className="grid md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onUpdate={updateGoal}
            onDelete={deleteGoal}
          />
        ))}
      </div>
    </div>
  </div>
);


}

export default App;

import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
    savedAmount: 0,
    createdAt: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "", savedAmount: 0 });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-3">
  <h3 className="text-lg font-semibold text-gray-700">Add a Goal</h3>
  <input name="name" placeholder="Goal Name" className="w-full p-2 border rounded" onChange={handleChange} value={formData.name} required />
  <input name="targetAmount" type="number" placeholder="Target Amount" className="w-full p-2 border rounded" onChange={handleChange} value={formData.targetAmount} required />
  <input name="category" placeholder="Category" className="w-full p-2 border rounded" onChange={handleChange} value={formData.category} required />
  <input name="deadline" type="date" className="w-full p-2 border rounded" onChange={handleChange} value={formData.deadline} required />
  <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Add Goal</button>
</form>

  );
}

export default GoalForm;

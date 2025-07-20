import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [selectedId, setSelectedId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const goal = goals.find((g) => g.id === selectedId);
    const newAmount = Number(goal.savedAmount) + Number(amount);
    onDeposit(selectedId, { savedAmount: newAmount });
    setAmount("");
  }

  return (
   <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-3">
  <h3 className="text-lg font-semibold text-gray-700">Put a Deposit</h3>
  <select className="w-full p-2 border rounded" value={selectedId} onChange={(e) => setSelectedId(e.target.value)} required>
    <option value="">Select Goal</option>
    {goals.map((g) => (
      <option key={g.id} value={g.id}>{g.name}</option>
    ))}
  </select>
  <input type="number" placeholder="Amount" className="w-full p-2 border rounded" value={amount} onChange={(e) => setAmount(e.target.value)} required />
  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">Deposit</button>
</form>

  );
}

export default DepositForm;

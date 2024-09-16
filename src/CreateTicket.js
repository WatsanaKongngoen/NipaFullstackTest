import React, { useState } from 'react';

function CreateTicket() {
  const [ticket, setTicket] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket Created:', ticket);
    setTicket('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create a Ticket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Ticket Description</label>
          <textarea
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
}

export default CreateTicket;

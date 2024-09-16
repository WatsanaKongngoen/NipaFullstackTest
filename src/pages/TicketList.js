import React from 'react';

function TicketList() {
  // Sample static tickets for demonstration
  const tickets = [
    { id: 1, description: 'Issue with login' },
    { id: 2, description: 'Bug in checkout process' },
  ];

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Ticket List</h2>
      <ul className="space-y-2">
        {tickets.map(ticket => (
          <li key={ticket.id} className="p-4 border border-gray-300 rounded">
            {ticket.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;

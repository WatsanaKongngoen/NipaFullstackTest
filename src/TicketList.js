import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('https://your-backend-api/tickets'); // Replace with your API endpoint
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.description} - {ticket.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;

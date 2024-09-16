import React, { useState, useEffect } from 'react';
import { fetchTicketById } from '../components/ticketAPI';
import { useParams } from 'react-router-dom';

function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const getTicket = async () => {
      const data = await fetchTicketById(id);
      setTicket(data);
    };

    getTicket();
  }, [id]);

  if (!ticket) return <p>Loading...</p>;

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
    </div>
  );
}

export default TicketDetails;

import React, { useState } from 'react';
import axios from 'axios';

function TicketForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact_information, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://your-backend-api/tickets', {
        title,
        description,
        contact_information
      });

      setMessage(`Ticket created successfully: ${response.data.title}`);
      setTitle('');
      setDescription('');
      setContact('');
    } catch (error) {
      setMessage(`Error creating ticket: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
          Contact Information :
            <input
              type="text"
              value={contact_information}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create Ticket</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default TicketForm;

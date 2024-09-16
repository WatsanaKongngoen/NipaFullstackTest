import axios from 'axios';

const API_URL = 'https://api.example.com/tickets'; // เปลี่ยน URL นี้ตาม API ของคุณ

export const fetchTickets = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchTicketById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

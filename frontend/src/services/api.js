import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-event-management-t54t.onrender.com',
});

export default {
  async getEvents() {
    const response = await api.get('/events');
    return response.data;
  },
  async getEventById(id) {
    const response = await api.get(`/events/${id}`);
    return response.data;
  },
  async createEvent(eventData) {
    const response = await api.post('/events', eventData);
    return response.data;
  },
  async registerForEvent(eventId, participantId) {
    const body = { eventId };
    if (participantId) {
      body.participantId = participantId;
    }
    const response = await api.post('/registrations', body);
    return response.data;
  },
  // Novo método: pegar todas as inscrições
  async getAllRegistrations() {
    const response = await api.get('/registrations');
    return response.data;
  },
};

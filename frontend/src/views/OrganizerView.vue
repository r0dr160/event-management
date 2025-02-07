<!-- src/views/OrganizerView.vue -->
<template>
  <div class="organizer-container">
    <h2>Painel do Organizador</h2>
    <router-link to="/organizador/create" class="btn-create">
      Criar Evento
    </router-link>

    <div v-if="events && events.length > 0" class="event-list">
      <div v-for="event in events" :key="event._id" class="event-card">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p><strong>Data:</strong> {{ formatDate(event.date) }}</p>
        <p><strong>Inscritos:</strong> {{ getRegistrationCount(event._id) }}</p>
      </div>
    </div>
    <div v-else>
      <p>Nenhum evento encontrado.</p>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'OrganizerView',
  data() {
    return {
      events: [],
      registrations: [],
    };
  },
  async mounted() {
    this.events = await api.getEvents();
    this.registrations = await api.getAllRegistrations();
  },
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleDateString();
    },
    getRegistrationCount(eventId) {
      return this.registrations.filter(r => r.eventId === eventId).length;
    },
  },
};
</script>

<style scoped>
.organizer-container {
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 6px;
  max-width: 800px;
  margin: 0 auto;
}

.organizer-container h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.btn-create {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0b74de;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.event-card {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  width: 220px;
  padding: 1rem;
  border-radius: 4px;
  transition: box-shadow 0.2s;
}

.event-card:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>

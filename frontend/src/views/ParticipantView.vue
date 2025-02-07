<!-- src/views/ParticipantView.vue -->
<template>
  <div class="participant-container">
    <h2>Painel do Participante</h2>

    <div v-if="events && events.length > 0" class="event-list">
      <div v-for="event in events" :key="event._id" class="event-card">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p><strong>Data:</strong> {{ formatDate(event.date) }}</p>
        <router-link :to="`/participante/event/${event._id}`">
          Ver Detalhes
        </router-link>
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
  name: 'ParticipantView',
  data() {
    return {
      events: [],
    };
  },
  async mounted() {
    this.events = await api.getEvents();
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.participant-container {
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 6px;
  max-width: 800px;
  margin: 0 auto;
}

.participant-container h2 {
  text-align: center;
  margin-bottom: 1rem;
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

.event-card a {
  color: #0b74de;
  text-decoration: none;
  font-weight: bold;
}
.event-card a:hover {
  text-decoration: underline;
}
</style>

<template>
  <div>
    <h2>Lista de Eventos</h2>

    <div v-if="events && events.length > 0" class="event-list">
      <div
        v-for="event in events"
        :key="event._id"
        class="event-card"
      >
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p><strong>Data:</strong> {{ formatDate(event.date) }}</p>
        <router-link :to="`/events/${event._id}`" class="details-link">
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
import api from '../services/api.js';

export default {
  name: 'HomeView',
  data() {
    return {
      events: [],
    };
  },
  async mounted() {
    // Buscar eventos do backend
    this.events = await api.getEvents();
  },
  methods: {
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.event-card {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 220px;
  border-radius: 4px;
}

.event-card h3 {
  margin-bottom: 0.5rem;
}

.details-link {
  color: #0b74de;
  text-decoration: none;
  font-weight: bold;
}
</style>

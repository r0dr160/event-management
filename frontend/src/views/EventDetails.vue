<!-- src/views/EventDetails.vue -->
<template>
  <div class="event-details-container">
    <div class="event-details-card" v-if="event">
      <h3>{{ event.title }}</h3>
      <p>{{ event.description }}</p>
      <p><strong>Data:</strong> {{ formatDate(event.date) }}</p>
      <button @click="registerParticipant">Inscrever-se</button>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      event: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.event = await api.getEventById(id);
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    },
    async registerParticipant() {
      let participantId = localStorage.getItem('participantId');
      if (!participantId) {
        participantId = Math.random().toString(36).substring(2, 12);
        localStorage.setItem('participantId', participantId);
      }
      try {
        await api.registerForEvent(this.event._id, participantId);
        alert('Inscrição realizada com sucesso!');
      } catch (err) {
        console.error(err);
        alert('Erro ao se inscrever.');
      }
    },
  },
};
</script>

<style scoped>
.event-details-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.event-details-card {
  background-color: #fff;
  width: 400px;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

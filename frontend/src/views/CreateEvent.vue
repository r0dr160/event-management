<!-- src/views/CreateEvent.vue -->
<template>
  <div class="create-event-container">
    <div class="create-event-card">
      <h2>Criar Novo Evento</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Título:</label>
          <input v-model="form.title" required />
        </div>
        <div class="form-group">
          <label>Descrição:</label>
          <textarea v-model="form.description" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>Data:</label>
          <input type="date" v-model="form.date" required />
        </div>
        <div class="button-bar">
          <button type="button" class="btn-cancel" @click="goBack">
            Voltar
          </button>
          <button type="submit" class="btn-submit">
            Criar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'CreateEvent',
  data() {
    return {
      form: {
        title: '',
        description: '',
        date: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await api.createEvent(this.form);
        alert('Evento criado com sucesso!');
        this.$router.push('/organizador');
      } catch (error) {
        console.error(error);
        alert('Erro ao criar evento.');
      }
    },
    goBack() {
      this.$router.push('/organizador');
    },
  },
};
</script>

<style scoped>
.create-event-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.create-event-card {
  background-color: #fff;
  width: 400px;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.create-event-card h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

input,
textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  font: inherit;
}

.button-bar {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-cancel,
.btn-submit {
  background-color: #ccc;
  border: none;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-cancel {
  background-color: #777;
}

.btn-submit {
  background-color: #0b74de;
}

.btn-submit:hover {
  background-color: #095dad;
}
</style>

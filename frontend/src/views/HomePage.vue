<!-- src/views/HomePage.vue -->
<template>
  <div class="home-container">
    <h2>Gerencie ou participe de eventos de forma simples!</h2>
    <p class="slogan">
      Bem-vindo ao nosso sistema de gestão de eventos.<br />
      Escolha uma opção abaixo para continuar:
    </p>

    <div class="button-group">
      <router-link to="/organizador" class="btn">
        Sou Organizador
      </router-link>
      <router-link to="/participante" class="btn">
        Sou Participante
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  text-align: center;
}

.home-container h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.slogan {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #555;
}

.button-group {
  display: flex;
  gap: 2rem;
}

.btn {
  background-color: #0b74de;
  color: #fff;
  padding: 1rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #095dad;
}
</style>

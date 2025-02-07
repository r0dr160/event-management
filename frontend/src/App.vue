<!-- src/App.vue -->
<template>
  <div class="app-container">
    <!-- Navbar -->
    <header class="navbar">
      <nav class="nav-left">
        <!-- Exibe "Voltar" se NÃO estiver na Home (path !== '/') -->
        <button v-if="$route.path !== '/'" @click="goBack" class="nav-button">
          ← Voltar
        </button>
        <!-- Exibe "Home" apenas na página inicial -->
        <router-link v-else to="/" class="nav-link">Home</router-link>
      </nav>

      <!-- Título centralizado -->
      <h1 class="nav-title">Event Management</h1>

      <!-- Espaço reservado à direita (pode ser usado no futuro) -->
      <div class="nav-right"></div>
    </header>

    <!-- Conteúdo principal -->
    <main>
      <router-view />
    </main>

    <!-- Rodapé -->
    <footer class="footer">
      <p>© 2025 - Demo | Gestão de Eventos</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      this.$router.back(); // Volta para a página anterior no histórico
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  background-color: #0b74de;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
}

.nav-left {
  flex: 1;
}

.nav-title {
  flex: 1;
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
}

.nav-right {
  flex: 1;
  text-align: right;
}

.nav-link,
.nav-button {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.nav-button:hover,
.nav-link:hover {
  text-decoration: underline;
}

/* Conteúdo principal */
main {
  flex: 1;
  padding: 2rem;
}

/* Rodapé */
.footer {
  background-color: #333;
  color: #fff;
  padding: 0.8rem;
  text-align: center;
}
</style>

# Event Management 🎉

Aplicacao web para a **gestao de eventos e participantes**. Permite que organizadores criem e gerenciem eventos, visualizem a quantidade de inscricoes e que os participantes consultem informacoes e inscrevam-se de forma anonima.

## 📋 Funcionalidades

### Para Organizadores:
- Criar, listar e visualizar eventos.
- Acompanhar a **quantidade de inscritos** em cada evento.
- Atualizar e excluir eventos (em desenvolvimento).

### Para Participantes:
- Consultar eventos disponiveis.
- Inscrever-se em eventos sem necessidade de criar conta (**inscricao anonima**).

## 🚀 Tecnologias Utilizadas

### Frontend:
- [Vue.js 3](https://vuejs.org/) (com [Vite](https://vitejs.dev/) para build rapido)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/) para requisicoes HTTP
- CSS puro para estilizacao (personalizavel)

### Backend:
- [Node.js](https://nodejs.org/) com [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- [Swagger](https://swagger.io/) para documentacao da API (`/api`)

### Ferramentas:
- [Git](https://git-scm.com/) para versionamento
- [Postman](https://www.postman.com/) para testar API (opcional)
- [WebStorm](https://www.jetbrains.com/webstorm/) para desenvolvimento (IDE recomendada)

---

## 🛠️ Instalacao e Configuracao

### Pre-requisitos:
- [Node.js](https://nodejs.org/) (versao 18+ recomendada)
- [MongoDB](https://www.mongodb.com/try/download/community) instalado e em execucao localmente ou na cloud (ex: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/) instalado

---

### 1. Clone o repositorio:

``
git clone https://github.com/r0dr160/event-management.git
cd event-management
``

### 2. Configuracao do **Backend** (NestJS)

``
cd backend
npm install
``

#### Configurar o ambiente:

Crie um ficheiro `.env` no diretorio `backend` com o seguinte conteudo:

``
MONGO_URI=mongodb://localhost:27017/event-management
APP_PORT=3000
``

> Substitua `MONGO_URI` se estiver usando MongoDB Atlas ou outro host.

#### Inicie o servidor:

``
npm run start:dev
``

O backend estara disponivel em [http://localhost:3000](http://localhost:3000)  
A documentacao da API estara em [http://localhost:3000/api](http://localhost:3000/api)

---

### 3. Configuracao do **Frontend** (Vue.js)

``
cd ../frontend
npm install
``

#### Inicie o servidor de desenvolvimento:

``
npm run dev
``

O frontend estara disponivel em [http://localhost:5173](http://localhost:5173)

---



## ✅ Testando a Aplicacao

1. Acesse [http://localhost:5173](http://localhost:5173)
2. Escolha se e **Organizador** ou **Participante**:
    - **Organizador:** Crie eventos e veja a lista de inscritos.
    - **Participante:** Consulte eventos e inscreva-se.
3. A API esta documentada em [http://localhost:3000/api](http://localhost:3000/api) (Swagger).

---

## 🤝 Como Contribuir

1. Faca um **fork** do projeto
2. Crie uma nova branch com a sua funcionalidade:
   ``
   git checkout -b feature/minha-funcionalidade
   ``
3. Faca **commit** das suas alteracoes:
   ``
   git commit -m 'Adiciona nova funcionalidade'
   ``
4. **Push** para a sua branch:
   ``
   git push origin feature/minha-funcionalidade
   ``
5. Abra um **Pull Request** no GitHub

---

## 📄 Licenca

Este projeto esta licenciado sob a **MIT License**.

---

Desenvolvido com 💙 por **Rodrigo (r0dr160)** no ambito do mestrado em **Engenharia Informatica e Tecnologia Web (UAB)**.

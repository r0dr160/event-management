import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OrganizerView from '../views/OrganizerView.vue';
import ParticipantView from '../views/ParticipantView.vue';
import CreateEvent from '../views/CreateEvent.vue';
import EventDetails from '../views/EventDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/organizador',
    name: 'Organizer',
    component: OrganizerView,
  },
  {
    path: '/organizador/create',
    name: 'CreateEvent',
    component: CreateEvent,
  },
  {
    path: '/participante',
    name: 'Participant',
    component: ParticipantView,
  },
  {
    path: '/participante/event/:id',
    name: 'EventDetailsParticipant',
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

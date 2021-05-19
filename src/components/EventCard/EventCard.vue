<template>
  <article class="event-card" aria-label="event">
    <figure class="event-card__image" aria-label="event-image">
      <img :src="event.image" :alt="event.name" v-if="event.image">
      <div class="event-card__image__empty" v-else>
        <p>No Image</p>
      </div>
    </figure>
    <section aria-label="event-details">
      <p class="event-card__date">
        {{event.start_time | formatDate}}
      </p>
      <h3 class="event-card__name">{{event.name}}</h3>
      <p :class="['event-card__price', {'--free': event.is_free, '--sold-out': event.is_sold_out}]">
        <span v-if="event && event.is_free">Free</span>
        <span v-else-if="event && event.is_sold_out">Sold Out</span>
        <span>N5000 - N2,000,000</span>
      </p>
      <router-link class="event-card__link" :to="`/events/${event.id}`">Link to event</router-link>
    </section>
  </article>
</template>
<script src="./EventCard.js"></script>
<style lang="scss" scoped src="./EventCard.scss"></style>

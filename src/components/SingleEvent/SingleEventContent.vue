<template>
  <article class="single-event__content">
    <div class="single-event__details">
      <p class="single-event__date">{{singleEvent && singleEvent.start_time | formatDate}}</p>
      <h1 class="single-event__name">{{singleEvent && singleEvent.name}}</h1>
      <p class="single-event__description">{{singleEvent && singleEvent.description}}</p>
      <p class="single-event__price">N5000 – N2,000,000</p>
      <f-button @click="$emit('buyTicket')" class="button">Buy tickets</f-button>
    </div>
    <div class="single-event__image">
      <img :src="singleEvent.image" :alt="singleEvent.name" v-if="singleEvent && singleEvent.image">
      <div class="image__empty" v-else>
        <p>No Image</p>
      </div>
    </div>
  </article>
</template>
<script>
import { FButton } from '@/components/Button/Button.vue';

export default {
  name: 'SingleEventContent',
  props: {
    singleEvent: {
      type: Object,
      default: () => ({
        name: '',
        description: '',
        image: '',
        start_time: '',
      }),
    },
  },
  components: {
    FButton,
  },
};
</script>

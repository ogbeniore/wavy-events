<template>
  <div class="single-event__data">
    <div class="single-event__data__item">
      <p class="single-event__data__title">Venue</p>
      <h3 class="single-event__data__main">
        {{singleEvent && singleEvent.venue}}
      </h3>
      <button class="single-event__data__button">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
          <g clip-path="url(#clip0)">
            <path
              d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"/>
            <path
              d="M6 1.5V13.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"/>
            <path
              d="M12 4.5V16.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        View map for directions
      </button>
    </div>
    <div class="single-event__data__item">
      <p class="single-event__data__title">Date and time</p>
      <h3 class="single-event__data__main">
        {{singleEvent && singleEvent.start_time | formatFullDate}}
      </h3>
      <template v-if="singleEvent && (singleEvent.social_links !== '{}')">
        <p class="single-event__data__list-title">
          Social links
        </p>
        <ul class="single-event__data-list">
          <li
            class="single-event__data-list__item"
            v-for="(link, index) in singleEvent.social_links"
            :key="index">
            <a href="http://www.nathanielcole.com" target="_blank" rel="noopener noreferer">
              {{link}}
            </a>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SingleEventData',
  props: {
    singleEvent: {
      type: Object,
      default: () => ({
        venue: '',
        start_time: '',
        social_links: '',
      }),
    },
  },
};
</script>

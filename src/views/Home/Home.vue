<template>
  <div class="home">
    <h1>The best events happening now.</h1>
    <div class="event__list" ref="events">
      <event-card v-for="event in allEvents" :key="event.id" :event="event" />
    </div>
    <div class="text-center" v-if="isLoading">
      <div class="loader" ></div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>

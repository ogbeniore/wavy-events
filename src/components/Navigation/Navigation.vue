<template>
  <nav aria-label="navigation" :class="['container d-flex nav', { 'open': open }]">
    <router-link to="/" class="nav__logo">
      <img src="@/assets/logo.svg" alt="Flutterwave">
    </router-link>
    <button class="nav__button" @click="open = !open">
      <span class="nav__button__trigger"></span>
    </button>
    <div class="nav__menu">
      <router-link class="nav__menu__item" to="/dispute">
      I didn’t get my tickets
      </router-link>
      <f-button small>Create your own event</f-button>
    </div>
  </nav>
</template>

<script src="./Navigation.js"></script>
<style lang="scss" scoped src="./Navigation.scss"></style>

<template>
  <button
    :class="['btn', {'btn--small': small}]"
    :disabled="disabled || loading"
    @click="handleClick">
    <slot />
    <span class="btn__loader" v-if="loading"></span>
  </button>
</template>

<script src="./Button.js"></script>
<style lang="scss" scoped src="./Button.scss"></style>

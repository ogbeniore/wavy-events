<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: $white;
  padding: 3rem;
  width: 100%;
  position: relative;
  @include mq(md) {
    padding: 5rem;
    max-width: 42rem;
    border-radius: 1rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
  }
}
</style>

<template>
  <div id="app" :class="{'no-lines': $route.meta && $route.meta.isHome}">
    <f-navigation />
    <main class="container">
      <router-view/>
    </main>
    <f-footer />
  </div>
</template>

<script>
import { FNavigation, FFooter } from '@/components';

export default {
  components: {
    FNavigation,
    FFooter,
  },
};
</script>
<style lang="scss" src="@/styles/main.scss"></style>
<style lang="scss" scoped>
#app {
  background-image: url("./assets/lines.svg");
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: contain;
  &.no-lines {
    background-image: unset;
  }
  main {
    min-height: 80vh;
  }
}
</style>

<template>
  <div id="app">
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

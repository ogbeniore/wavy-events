<template>
  <div id="app">
    <f-navigation />
    <!-- <router-view/> -->
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

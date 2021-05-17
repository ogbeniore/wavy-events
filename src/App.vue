<template>
  <div id="app">
    <f-navigation />
    <router-view/>
  </div>
</template>

<script>
import { FNavigation } from '@/components';

export default {
  components: {
    FNavigation,
  },
};
</script>
<style lang="scss" src="@/styles/main.scss"></style>

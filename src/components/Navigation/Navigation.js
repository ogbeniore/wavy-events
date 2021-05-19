import { FButton } from '@/components';

export default {
  name: 'FNavigation',
  components: {
    FButton,
  },
  data: () => ({
    open: false,
  }),
  watch: {
    $route(val) {
      if (val) {
        this.open = false;
      }
    },
  },
};

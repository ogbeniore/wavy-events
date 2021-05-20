export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true,
      default: () => ({
        is_free: false,
        is_sold_out: false,
      }),
    },
  },
};

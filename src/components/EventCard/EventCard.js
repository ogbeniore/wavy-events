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
  filters: {
    formatDate(val) {
      const dateToFormat = new Date(val);
      const months = [
        'January', 'Februbary', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
      ];
      const day = dateToFormat.getDate().toString();
      let suffix = '';
      switch (day.substr(-1)) {
        case '1':
          suffix = 'st';
          break;
        case '2':
          suffix = 'nd';
          break;
        case '3':
          suffix = 'rd';
          break;
        default:
          suffix = 'th';
          break;
      }
      return `${day + suffix} ${months[dateToFormat.getMonth()]} ${dateToFormat.getFullYear()}`;
    },
  },
};

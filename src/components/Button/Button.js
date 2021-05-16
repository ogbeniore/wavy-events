export default {
  name: 'FButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};

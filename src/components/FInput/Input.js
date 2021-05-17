export default {
  name: 'FInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email',
        ].includes(value);
      },
    },
    value: {
      type: null,
      default: '',
    },
  },
  data: () => ({
    innerValue: null,
    emailRegEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //eslint-disable-line
  }),
  computed: {
    hasError() {
      const { innerValue, type } = this;
      if (innerValue !== null) {
        if (type === 'email') {
          return !this.emailRegEx.test(innerValue);
        }
        return innerValue.length <= 0;
      }
      return false;
    },
  },
  watch: {
    innerValue(value) {
      this.$emit('input', value);
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
    hasError(val) {
      this.$emit('error', val);
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};

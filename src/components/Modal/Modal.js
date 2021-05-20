import { FCard } from '@/components';

export default {
  name: 'FModal',
  components: {
    FCard,
  },
  props: {
    loading: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};

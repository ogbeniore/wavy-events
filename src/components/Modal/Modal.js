import { FCard } from '@/components';

export default {
  name: 'FModal',
  components: {
    FCard,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};

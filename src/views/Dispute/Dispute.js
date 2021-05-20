import { FCard, FInput, FButton } from '@/components';

export default {
  name: 'DisputePage',
  components: {
    FCard,
    FInput,
    FButton,
  },
  data: () => ({
    showForm: true,
    email: null,
    isLoading: false,
  }),
  methods: {
    confirmDispute() {
      this.isLoading = true;
      setTimeout(() => {
        this.showForm = false;
      }, 3000);
    },
  },
};

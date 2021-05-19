import {
  FButton, Cart, FModal, FInput,
} from '@/components';

export default {
  name: 'SingleEventPage',
  components: {
    FButton,
    Cart,
    FModal,
    FInput,
  },
  data: () => ({
    showCart: false,
    isFree: false,
    showFreeModal: false,
  }),
  methods: {
    buyTicket() {
      if (this.isFree) {
        this.showFreeModal = !this.showFreeModal;
      } else {
        this.showCart = !this.showCart;
      }
    },
  },
};

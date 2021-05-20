import { mapGetters, mapActions } from 'vuex';
import { INCREMENT, DECREMENT } from '@/utils/calc';
import OrderSummary from './OrderSummary/OrderSummary.vue';
import OrderDetailsForm from './OrderDetailsForm/OrderDetailsForm.vue';

export default {
  name: 'Cart',
  components: {
    OrderSummary,
    OrderDetailsForm,
  },
  data: () => ({
    showOrderForm: false,
  }),
  computed: {
    ...mapGetters(['ticketTypes', 'singleEvent', 'cartItems']),
  },
  methods: {
    ...mapActions(['updateCartQuantity', 'clearCart']),
    getTicketQuantity(ticketID) {
      if (this.cartItems && this.cartItems.length) {
        return this.cartItems.find(({ id }) => ticketID === id).numberOfTicketsBought;
      } return 0;
    },
    incrementTickets(id, max) {
      this.updateCartQuantity({ id, updateQuantity: (n) => INCREMENT(n, max) });
    },
    decrementTickets(id) {
      this.updateCartQuantity({ id, updateQuantity: (n) => DECREMENT(n) });
    },
    handleSuccess() {
      this.showOrderForm = false;
      this.$emit('success');
      this.$emit('close');
      this.clearCart();
    },
  },
};

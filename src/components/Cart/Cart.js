import { mapGetters, mapActions } from 'vuex';
import { INCREMENT, DECREMENT } from '@/utils/calc';
import OrderSummary from './OrderSummary.vue';

export default {
  name: 'Cart',
  components: {
    OrderSummary,
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['ticketTypes', 'singleEvent', 'cartItems']),
  },
  methods: {
    ...mapActions(['updateCartQuantity']),
    getTicketQuantity(ticketID) {
      if (this.cartItems) {
        return this.cartItems.find(({ id }) => ticketID === id).numberOfTicketsBought;
      } return 0;
    },
    incrementTickets(id, max) {
      this.updateCartQuantity({ id, updateQuantity: (n) => INCREMENT(n, max) });
    },
    decrementTickets(id) {
      this.updateCartQuantity({ id, updateQuantity: (n) => DECREMENT(n) });
    },
  },
};

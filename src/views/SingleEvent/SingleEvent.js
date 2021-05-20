import {
  FButton, Cart, FModal, FInput, SingleEventData,
} from '@/components';
// import vuex things
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SingleEventPage',
  components: {
    FButton,
    Cart,
    FModal,
    FInput,
    SingleEventData,
  },
  data: () => ({
    showCart: false,
    showFreeModal: false,
    isLoading: true,
  }),
  computed: {
    ...mapGetters(['singleEvent', 'ticketTypes']),
    lowestPrice() {
      const { ticketTypes } = this;
      return ticketTypes && ticketTypes[0].price;
    },
    highestPrice() {
      const { ticketTypes } = this;
      return ticketTypes && ticketTypes[ticketTypes.length - 1].price;
    },
    isFree() {
      return !this.ticketTypes.length;
    },
  },
  mounted() {
    const { $route: { params: { id } }, singleEvent } = this;
    if ((singleEvent && singleEvent.id) !== id) this.fetchSingleEvent(id);
  },
  methods: {
    ...mapActions(['fetchSingleEvent']),
    buyTicket() {
      if (this.isFree) {
        this.showFreeModal = !this.showFreeModal;
      } else {
        this.showCart = !this.showCart;
      }
    },
  },
  watch: {
    singleEvent: {
      deep: true,
      handler(val) {
        if (val) {
          this.isLoading = false;
        }
      },
    },
  },
};

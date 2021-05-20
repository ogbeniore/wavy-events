import {
  FButton, Cart, FModal, FInput, SingleEventData, RegisterModal,
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
    RegisterModal,
  },
  data: () => ({
    showCart: false,
    showFreeModal: false,
    isLoading: true,
  }),
  computed: {
    ...mapGetters(['singleEvent', 'ticketTypes']),
    lowestPrice() {
      const { ticketTypes, isFree } = this;
      return !isFree && ticketTypes && ticketTypes[0].price;
    },
    highestPrice() {
      const { ticketTypes, isFree } = this;
      return !isFree && ticketTypes && ticketTypes[ticketTypes.length - 1].price;
    },
    isFree() {
      return this.ticketTypes && !this.ticketTypes.length;
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

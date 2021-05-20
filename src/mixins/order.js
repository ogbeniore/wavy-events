import { FButton } from '@/components';
import { mapGetters } from 'vuex';
import { ticketTotal, SUM } from '@/utils/calc';
import { VAT } from '@/utils/constants';

export default {
  components: {
    FButton,
  },
  computed: {
    ...mapGetters(['selectedCartItems', 'singleEvent']),
    subTotal() {
      const { selectedCartItems } = this;
      const prices = [];
      selectedCartItems.map((item) => prices.push(ticketTotal(item)));
      return SUM(prices);
    },
    vat() {
      const { selectedCartItems } = this;
      return selectedCartItems && selectedCartItems.length ? VAT : 0;
    },
    totalPayment() {
      const { vat, subTotal } = this;
      return SUM([vat, subTotal]);
    },
    cartIsEmpty() {
      const { selectedCartItems } = this;
      return !(selectedCartItems && selectedCartItems.length);
    },
  },
  filters: {
    calcTotal(value) {
      return ticketTotal(value);
    },
  },
};

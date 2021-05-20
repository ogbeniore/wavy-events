import OrderMixin from '@/mixins/order';
import FInput from '@/components/FInput/Input.vue';
import { createTicketOrder, registerForEvent } from '@/utils/api';
import payForTicket from '@/utils/flutterwave';

export default {
  name: 'OrderDetailsForm',
  mixins: [OrderMixin],
  components: {
    FInput,
  },
  data: () => ({
    showForm: true,
    showError: false,
    isLoading: false,
    userData: {},
  }),
  methods: {
    async handleSubmit() {
      // Reset state of the component before anything
      this.isLoading = true;
      this.showError = false;
      const {
        userData, singleEvent: event, totalPayment, subTotal, selectedCartItems, vat,
      } = this;
      const ticketsBought = {};
      selectedCartItems.map((item) => {
        ticketsBought[item.id] = item.numberOfTicketsBought;
      });
      const body = {
        event_id: event.id,
        ...userData,
        base_amount: subTotal,
        value_added_tax: vat,
        tickets_bought: ticketsBought,
        totalPayment,
        event,
        reference: this.generateReference(),
      };
      const orderCreated = await createTicketOrder({ body, event: event.id });
      if (orderCreated && orderCreated.status === 200) {
        try {
          await payForTicket({ body })
            .then(({ close }) => (close ? this.handleError() : this.register()));
        } catch (data) {
          this.handleError();
        }
      }
    },
    register() {
      const { userData, singleEvent: event } = this;
      registerForEvent({
        body: userData,
        event: event.id,
      }).then(() => {
        this.userData = {};
        this.isLoading = false;
        this.$emit('success');
      });
    },
    handleError() {
      this.isLoading = false;
      this.showError = true;
    },
    generateReference() {
      const result = [];
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < 12; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
      return `WAVY-EVENTS-${result.join('').toUpperCase()}${this.singleEvent.id}`;
    },
  },
};

import OrderSummary from './OrderSummary.vue';

export default {
  name: 'Cart',
  components: {
    OrderSummary,
  },
  data: () => ({
    ticketTypes: [
      {
        id: 1,
        name: 'Regular',
        event_id: 1,
        price: 10000,
        currency: 'NGN',
        qty_available: 50,
        createdAt: '2020-04-30T11:04:43.000Z',
        updatedAt: '2020-04-30T11:04:43.000Z',
      },
      {
        id: 4,
        name: 'VIP',
        event_id: 1,
        price: 50000,
        currency: 'NGN',
        qty_available: 20,
        createdAt: '2020-05-20T10:17:50.000Z',
        updatedAt: '2020-05-20T10:17:50.000Z',
      },
      {
        id: 17,
        name: 'Table for 5',
        event_id: 1,
        price: 1000000,
        currency: 'NGN',
        qty_available: 50,
        createdAt: '2021-02-17T15:53:11.000Z',
        updatedAt: '2021-02-17T15:53:11.000Z',
      },
    ],
    eventDetails: {
      id: 1,
      name: 'Lyricist Lounge',
      description: 'For rappers',
      start_time: '2020-08-21T00:00:00.000Z',
      end_time: '2020-08-21T00:00:00.000Z',
      venue: 'Lagos',
      num_of_tickets: 10000,
      tags: 'Music',
      social_links: '{}',
      tickets_sale_end_date: '2020-08-21T00:00:00.000Z',
      is_free: false,
      is_sold_out: false,
      image: null,
      createdAt: '2020-04-30T10:51:37.000Z',
      updatedAt: '2020-04-30T10:51:37.000Z',
    },
  }),
};

<template>
  <div class="order-summary">
    <h2 class="order-summary__header">ORDER SUMMARY</h2>
    <ul class="ticket-list">
      <li class="ticket-list__item">
        <span class="text-bold">2 - Regular</span>
        <span>N10,000</span>
      </li>
      <li class="ticket-list__item">
        <span class="text-bold">2 - VIP</span>
        <span>N100,000</span>
      </li>
    </ul>
    <ul class="ticket-list">
      <li class="ticket-list__item">
        <span class="text-bold">Sub-total</span>
        <span>N110,000</span>
      </li>
      <li class="ticket-list__item">
        <span class="text-bold">VAT</span>
        <span>N100</span>
      </li>
      <li class="ticket-list__item">
        <span class="text-bold">TOTAL PAYMENT</span>
        <span class="text-total">N111,000</span>
      </li>
    </ul>
    <f-button>Continue</f-button>
    <div class="d-flex protection">
      <img src="@/assets/verified.svg" alt="Verified">
      <div>
        <p class="text-bold">100% customer protection</p>
        <p class="text-grey">Money back guarantee</p>
      </div>
    </div>
  </div>
</template>
<script>
import { FButton } from '@/components';

export default {
  name: 'OrderSummary',
  components: {
    FButton,
  },
};
</script>

<style lang="scss" scoped>
.order-summary__header {
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-weight: 500;
  margin-bottom: 3rem;
}
.ticket-list {
  border-top: 1px solid #BDBDBD;
  list-style: none;
  margin: 0;
  padding: 1rem 0 0 0;
  &:first-of-type {
    min-height: 10rem;
  }
  &:last-of-type {
    padding-bottom: 1rem;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 1.4rem;
    line-height: 1.6rem;
    padding: 1rem 0;
    .text-total {
      font-size: 2.4rem;
      line-height: 2.8rem;
      font-weight: bold;
    }
  }
}
.protection {
  margin-top: 3rem;
  div {
    margin-left: 1rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    &.text-grey {
      font-weight: 400;
    }
  }
}
@include mq(md) {
  .ticket-list:first-of-type {
    min-height: 25rem;
  }
}
</style>

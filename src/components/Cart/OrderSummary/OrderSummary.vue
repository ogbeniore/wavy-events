<template>
  <transition name="slide">
    <div class="order-summary">
      <h2 class="order-summary__header">ORDER SUMMARY</h2>
      <ul class="ticket-list" v-if="cartIsEmpty">
        <li class="ticket-list__item">
          Your cart is currently empty
        </li>
      </ul>
      <template v-else>
        <ul class="ticket-list">
          <li class="ticket-list__item" v-for="item in selectedCartItems" :key="item.id">
            <span class="text-bold">{{item.numberOfTicketsBought}} - {{item.name}}</span>
            <span>{{item | calcTotal | formatAmount}}</span>
          </li>
        </ul>

        <ul class="ticket-list" v-if="!cartIsEmpty">
          <li class="ticket-list__item">
            <span class="text-bold">Sub-total</span>
            <span>{{ subTotal | formatAmount }}</span>
          </li>
          <li class="ticket-list__item">
            <span class="text-bold">VAT</span>
            <span>{{ vat | formatAmount}}</span>
          </li>
          <li class="ticket-list__item">
            <span class="text-bold">TOTAL PAYMENT</span>
            <span class="text-total">{{totalPayment | formatAmount}}</span>
          </li>
        </ul>
        <f-button @click="$emit('continue')">Continue</f-button>
        <div class="d-flex protection">
          <img src="@/assets/verified.svg" alt="Verified">
          <div>
            <p class="text-bold">100% customer protection</p>
            <p class="text-grey">Money back guarantee</p>
          </div>
        </div>
      </template>
    </div>
  </transition>
</template>
<script src="./OrderSummary.js"></script>
<style lang="scss" scoped src="./OrderSummary.scss"></style>

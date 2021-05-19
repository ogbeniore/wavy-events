<template>
  <transition name="modal-fade">
    <div class="cart">
      <section class="cart__content">
        <button class="cart__close" @click="$emit('close')">
          &#x2715; Close
        </button>
        <div class="event-details">
          <h1>The Nathan Cole Experience</h1>
          <p class="text-uppercase">8th February 2019</p>
        </div>
        <ul class="ticket-list">
          <li class="ticket-list__item" v-for="type in ticketTypes" :key="type.id">
            <p class="ticket-type">{{type.name}}</p>
            <p class="ticket-price">N{{type.price}}</p>
            <div class="ticket-action">
              <button class="ticket-action__button">
                <img src="@/assets/minus.svg" alt="Remove item">
              </button>
              <span class="ticket-count">2</span>
              <button class="ticket-action__button">
                <img src="@/assets/plus.svg" alt="Add item">
              </button>
            </div>
          </li>
        </ul>
        <small class="event-end">Ticket sales ends on 22nd November 2019</small>
      </section>
      <section class="cart__sidebar">
        <order-summary />
      </section>
    </div>
  </transition>
</template>

<script src="./Cart.js"></script>
<style lang="scss" scoped src="./Cart.scss"></style>

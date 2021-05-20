<template>
  <transition name="modal-fade">
    <div class="cart">
      <section class="cart__content">
        <button class="cart__close" @click="$emit('close')">
          &#x2715; Close
        </button>
        <div class="event-details">
          <h1>{{singleEvent && singleEvent.name}}</h1>
          <p class="text-uppercase">
            {{singleEvent && singleEvent.start_time | formatDate}}
          </p>
        </div>
        <ul class="ticket-list">
          <li class="ticket-list__item" v-for="type in ticketTypes" :key="type.id">
            <p class="ticket-type">{{type.name}}</p>
            <p class="ticket-price">{{type.price | formatAmount}}</p>
            <div class="ticket-action">
              <button class="ticket-action__button" @click="decrementTickets(type.id)">
                <img src="@/assets/minus.svg" alt="Remove item">
              </button>
              <span class="ticket-count">{{getTicketQuantity(type.id)}}</span>
              <button
                class="ticket-action__button"
                @click="incrementTickets(type.id, type.qty_available)">
                <img src="@/assets/plus.svg" alt="Add item">
              </button>
            </div>
          </li>
        </ul>
        <small class="event-end">
          Ticket sales ends on {{singleEvent && singleEvent.tickets_sale_end_date | formatDate}}
        </small>
      </section>
      <aside class="cart__sidebar">
        <order-details-form
          v-show="showOrderForm"
          @back="showOrderForm = false"
          @success="handleSuccess" />
        <order-summary v-show="!showOrderForm" @continue="showOrderForm = true"/>
      </aside>
    </div>
  </transition>
</template>

<script src="./Cart.js"></script>
<style lang="scss" scoped src="./Cart.scss"></style>

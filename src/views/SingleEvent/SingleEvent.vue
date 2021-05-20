<template>
  <div class="single-event">
    <template v-if="!isLoading">
      <article class="single-event__content">
        <div class="single-event__details">
          <p class="single-event__date">{{singleEvent.start_time | formatDate}}</p>
          <h1 class="single-event__name">{{singleEvent.name}}</h1>
          <p class="single-event__description">{{singleEvent.description}}</p>
          <p class="single-event__price">
            {{lowestPrice | formatAmount}} – {{highestPrice | formatAmount}}
          </p>
          <f-button @click="buyTicket" class="button">Buy tickets</f-button>
        </div>
        <div class="single-event__image">
          <img :src="singleEvent.image" :alt="singleEvent.name" v-if="singleEvent.image">
          <div class="image__empty" v-else>
            <p>No Image</p>
          </div>
        </div>
      </article>
      <hr class="single-event__page-divider">
      <single-event-data :single-event='singleEvent' />
    </template>
    <div class="text-center" v-else>
      <div class="loader" ></div>
    </div>
    <cart v-show="showCart" @close="showCart = false" />
    <f-modal v-show="showFreeModal" @close="showFreeModal = false">
      <template v-if="true">
        <h3 class="modal__title">
          Register for free
        </h3>
        <form>
          <f-input name="name" label="Full name" />
          <f-input name="email" label="Email address" type="email" />
          <f-input name="phone" label="Phone number" type="tel" />
          <f-button>Register</f-button>
        </form>
      </template>
      <div v-else class="modal__success">
        <img src="@/assets/success.svg" alt="Transaction Successful">
        <p class="modal__success__message">
          You have successfully registered for the nathan cole experience.
        </p>
      </div>
    </f-modal>
  </div>
</template>
<script src="./SingleEvent.js"></script>
<style lang="scss" src="./SingleEvent.scss"></style>

<template>
  <transition name="slide">
    <div class="order-summary">
      <button class="order-summary__back-button" @click="$emit('back')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 12H5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"/>
          <path
            d="M12 19L5 12L12 5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"/>
        </svg>
        Go Back
      </button>
      <form @submit.prevent="handleSubmit" class="order-summary__form">
        <p class="error-message" v-if="showError">
        Error trying to register for "{{singleEvent&& singleEvent.name}}".
        </p>
        <f-input name="name" label="Full name" v-model="userData.name" />
        <f-input name="email" label="Email address" type="email" v-model="userData.email" />
        <f-input name="phone" label="Phone number" type="tel" v-model="userData.phone" />
        <div class="ticket-list__item">
          <span class="text-bold">TOTAL PAYMENT</span>
          <span class="text-total">{{totalPayment | formatAmount}}</span>
        </div>
        <br>
        <f-button :loading="isLoading">pay {{totalPayment | formatAmount}}</f-button>
      </form>
      <div class="d-flex protection">
        <img src="@/assets/verified.svg" alt="Verified">
        <div>
          <p class="text-bold">100% customer protection</p>
          <p class="text-grey">Money back guarantee</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<script src="./OrderDetailsForm.js"></script>
<style lang="scss" scoped src="./OrderDetailsForm.scss"></style>

<template>
  <div class="dispute">
    <h1 class="dispute__title">Enter your email and we’ll send your tickets right away!</h1>
    <f-card>
      <form v-if="showForm">
        <f-input name="email" label="Email address" type="email" />
        <f-button>Confirm and send ticket</f-button>
      </form>
      <div class="dispute__success" v-else>
        <img src="@/assets/success.svg" alt="Transaction Successful">
        <p class="dispute__success__message">
          Your tickets have been confirmed and sent to your email address at
          <br>
          <span class="text-blue">
          ted@flutterwave.com
          </span>
        </p>
         <f-button>Buy more tickets</f-button>
      </div>
    </f-card>
  </div>
</template>
<script src="./Dispute.js"></script>
<style lang="scss" scoped src="./Dispute.scss"></style>

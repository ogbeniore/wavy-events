<template>
  <div class="single-event">
    <template v-if="!isLoading">
      <article class="single-event__content">
        <div class="single-event__details">
          <p class="single-event__date">{{singleEvent.start_time | formatDate}}</p>
          <h1 class="single-event__name">{{singleEvent.name}}</h1>
          <p class="single-event__description">{{singleEvent.description}}</p>
          <p class="single-event__price" v-if="!isFree">
            {{lowestPrice | formatAmount}}
            <span v-if="lowestPrice !== highestPrice">
               – {{highestPrice | formatAmount}}
            </span>
          </p>
          <f-button @click="buyTicket" class="button">
            {{isFree ? 'Register for free' : 'Buy tickets'}}
          </f-button>
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
    <register-modal
      :show-free-modal="showFreeModal"
      :event-id="singleEvent && singleEvent.id"
      :event-name="singleEvent && singleEvent.name"
      @close="showFreeModal = false" />
  </div>
</template>
<script src="./SingleEvent.js"></script>
<style lang="scss" src="./SingleEvent.scss"></style>

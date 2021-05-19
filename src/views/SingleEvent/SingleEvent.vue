<template>
  <div class="single-event">
    <article class="single-event-content">
      <div class="single-event-details">
        <p class="single-event-date">8TH February 2021</p>
        <h1 class="single-event-name">The Nathan Cole Experience</h1>
        <p class="single-event-description">
          Two-Time Grammy Award winner, Nathaniel Cole, who’s also just released an album,
          Into The Wild, will be having his first concert in Lagos, Nigeria! <br>
          Fans have waited so long for this announcement,
          and it promises to be everything anyone has imagined.
        </p>
        <p class="single-event-price">N5000 – N2,000,000</p>
        <f-button @click="buyTicket" class="button">Buy tickets</f-button>
      </div>
      <div class="single-event-image">
        <img src="@/assets/event-image.png" alt="Event name">
      </div>
    </article>
    <hr class="single-event-page-divider">
    <div class="single-event-data">
      <div class="single-event-data-item">
        <p class="single-event-data-title">Venue</p>
        <h3 class="single-event-data-main">
          Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
        </h3>
        <button class="single-event-data-button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
            <g clip-path="url(#clip0)">
              <path
                d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M6 1.5V13.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M12 4.5V16.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          View map for directions
        </button>
      </div>
      <div class="single-event-data-item">
        <p class="single-event-data-title">Date and time</p>
        <h3 class="single-event-data-main">
          Friday, February 8th 2019, 10:00pm
        </h3>
        <p class="single-event-data-list-title">
          Social links
        </p>
        <ul class="single-event-data-list">
          <li class="single-event-data-list-item">
            <a href="http://www.nathanielcole.com" target="_blank" rel="noopener noreferer">
              http://www.nathanielcole.com
            </a>
          </li>
          <li class="single-event-data-list-item">
           <a href="http://www.nathanielcole.com" target="_blank" rel="noopener noreferer">
              http://www.nathanielcole.com
            </a>
          </li>
          <li class="single-event-data-list-item">
            <a href="http://www.nathanielcole.com" target="_blank" rel="noopener noreferer">
              http://www.nathanielcole.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <cart v-show="showCart" @close="showCart = false" />
    <f-modal v-show="showFreeModal" @close="showFreeModal = false">
      <template v-if="true">
        <h3 class="modal-title">
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
<style lang="scss" scoped src="./SingleEvent.scss"></style>

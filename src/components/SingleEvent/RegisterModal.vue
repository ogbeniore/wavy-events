<template>
  <f-modal v-show="showFreeModal" :loading="isLoading" @close="$emit('close')">
    <template v-if="showForm">
      <h3 class="modal__title">
        Register for free
      </h3>
      <form @submit.prevent="register">
        <p class="error-message" v-if="showError">
        Error trying to register for "{{eventName}}"".
        </p>
        <f-input name="name" label="Full name" v-model="userData.name" />
        <f-input name="email" label="Email address" type="email" v-model="userData.email" />
        <f-input name="phone" label="Phone number" type="tel" v-model="userData.phone" />
        <f-button :loading="isLoading">Register</f-button>
      </form>
    </template>
    <div v-else class="modal__success">
      <img src="@/assets/success.svg" alt="Transaction Successful">
      <p class="modal__success__message">
        You have successfully registered for {{eventName}}.
      </p>
    </div>
    </f-modal>
</template>
<script>
import { registerForEvent } from '@/utils/api';
import FInput from '../FInput/Input.vue';
import FButton from '../Button/Button.vue';
import FModal from '../Modal/Modal.vue';

export default {
  name: 'RegisterFreeModal',
  props: {
    showFreeModal: {
      default: false,
      type: Boolean,
    },
    eventId: {
      type: Number,
    },
    eventName: {
      type: String,
    },
  },
  components: {
    FInput,
    FButton,
    FModal,
  },
  data: () => ({
    showForm: true,
    showError: false,
    isLoading: false,
    userData: {},
  }),
  methods: {
    async register() {
      const { userData, eventId } = this;
      // Reset state of the component before anything
      this.isLoading = true;
      this.showError = false;
      registerForEvent({ userData, eventId })
        .then(({ data }) => {
          if (data.status === 'success') {
            this.isLoading = false;
            this.showForm = false;
            // Close modal after three seconds after the request is successful
            setTimeout(() => {
              this.$emit('close');
            }, 3000);
          }
        })
        // Display Error message if there's an error for some reason
        .catch(() => { this.showError = true; });
    },
  },
};
</script>

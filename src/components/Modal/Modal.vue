<template>
  <transition name="modal-fade">
    <div class="modal" role="dialog">
      <f-card>
        <button class="modal__close" @click="closeModal" :disabled="loading">
          &#x2715;
        </button>
        <slot />
      </f-card>
    </div>
  </transition>
</template>

<script src="./Modal.js"></script>
<style lang="scss" scoped src="./Modal.scss"></style>

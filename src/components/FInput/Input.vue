<template>
  <div class="form-item">
    <label
      :for="name"
      class="form-item__label">
      {{label}}
    </label>
    <input
      :type="type"
      :name="name"
      :class="['form-item__input', { 'error': hasError }]"
      v-model.trim="innerValue">
    <small class="form-item__error" v-if="hasError">{{name}} is invalid</small>
  </div>
</template>
<script src="./Input.js"></script>
<style lang="scss" scoped src="./Input.scss"></style>

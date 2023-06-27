<template>
  <div class="row bottom-button-nav">
    <div class="row left-container" data-testid="left-container">
      <slot name="leftSide"></slot>
    </div>
    <div class="row right-container" data-testid="right-container">
      <slot name="rightSide"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bottom-button-nav {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 80px);
  margin: 0 40px 40px;
}
</style>

<template>
  <span class="auth-hero-icon" :class="`auth-hero-icon--${tone}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'dark' | 'mint'
  }>(),
  { tone: 'mint' }
)
</script>

<style scoped>
.auth-hero-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 12px;
  box-shadow:
    0 1px 1px rgb(0 0 0 / 0.04),
    0 4px 2px rgb(0 0 0 / 0.04),
    0 9px 3px rgb(0 0 0 / 0.02);
}

.auth-hero-icon--dark {
  background: #0b0b0b;
  color: #fff;
}

.auth-hero-icon--mint {
  background: #dbfffa;
  color: #00b39d;
}
</style>

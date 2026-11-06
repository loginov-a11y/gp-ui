<template>
  <div class="dropdown-item" :class="{ _active: active, _disabled: disabled }" @click="handleClick">
    <div class="dropdown-item__icon" v-if="$slots.icon">
      <slot name="icon" />
    </div>

    <div class="dropdown-item__content">
      <div class="dropdown-item__title">
        <slot name="title" />
      </div>
      <div class="dropdown-item__subtitle" v-if="$slots.subtitle">
        <slot name="subtitle" />
      </div>
    </div>

    <div class="dropdown-item__action" v-if="$slots.action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean
  disabled?: boolean
}

interface Emits {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  disabled: false
})

const emit = defineEmits<Emits>()

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  transition: var(--transition-normal);
  border-bottom: 1px solid var(--color-gray-border-light);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover:not(._disabled) {
  background: var(--color-background-light);
}

.dropdown-item._active {
  background: var(--color-background-light);
}

.dropdown-item._disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dropdown-item__icon {
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75em;
  color: var(--color-primary);
}

.dropdown-item__content {
  flex: 1;
}

.dropdown-item__title {
  font-size: var(--font-size-text16);
  font-weight: var(--font-weight-medium);
  color: var(--color-black);
  line-height: var(--line-height-normal);
}

.dropdown-item__subtitle {
  font-size: var(--font-size-text13);
  color: var(--color-gray-medium);
  line-height: var(--line-height-normal);
  margin-top: 0.125em;
}

.dropdown-item__action {
  margin-left: 0.5em;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

/* Mobile Styles */
@media screen and (max-width: 992px) {
  .dropdown-item {
    padding: 0.875em;
  }

  .dropdown-item__icon {
    width: 1.75em;
    height: 1.75em;
    margin-right: 0.625em;
  }

  .dropdown-item__title {
    font-size: var(--font-size-text15);
  }

  .dropdown-item__subtitle {
    font-size: var(--font-size-text12);
  }
}
</style>

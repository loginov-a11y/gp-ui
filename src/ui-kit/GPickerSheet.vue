<template>
  <Teleport to="body">
    <div v-if="open" class="ui-kit g-picker-sheet" role="dialog" aria-modal="true">
      <button
        type="button"
        class="g-picker-sheet__backdrop"
        :aria-label="$t('common.close')"
        @click="emit('close')"
      />
      <div class="g-picker-sheet__panel" @click.stop>
        <div class="g-picker-sheet__head">
          <span class="g-picker-sheet__handle" aria-hidden="true" />
          <button
            type="button"
            class="g-picker-sheet__close"
            :aria-label="$t('common.close')"
            @click="emit('close')"
          >
            <IconsClose :size="12" />
          </button>
        </div>

        <div class="g-picker-sheet__body">
          <slot />
        </div>

        <div class="g-picker-sheet__footer">
          <GButton variant="primary" size="lg" block @click="emit('save')">
            {{ $t('common.save') }}
          </GButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import GButton from '~/ui-kit/GButton.vue'
import IconsClose from '~/components/icons/Close.vue'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
  save: []
}>()
</script>

<style scoped>
.g-picker-sheet {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: flex;
  align-items: flex-end;
}

.g-picker-sheet__backdrop {
  position: absolute;
  inset: 0;
  border: none;
  padding: 0;
  background: rgb(0 0 0 / 0.4);
  cursor: pointer;
}

.g-picker-sheet__panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: min(92dvh, 100%);
  padding-bottom: env(safe-area-inset-bottom);
  border-radius: 20px 20px 0 0;
  background: #fff;
  overflow: hidden;
}

.g-picker-sheet__head {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 48px;
  padding-top: 4px;
  flex-shrink: 0;
}

.g-picker-sheet__handle {
  width: 40px;
  height: 5px;
  border-radius: 100px;
  background: #d9d9d9;
}

.g-picker-sheet__close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #f7f7f7;
  color: #0b0b0b;
  cursor: pointer;
}

.g-picker-sheet__body {
  min-height: 0;
  overflow: auto;
}

.g-picker-sheet__footer {
  flex-shrink: 0;
  padding: 12px 16px;
}

.g-picker-sheet__body :deep(.g-date-picker) {
  display: block;
  width: 100%;
  max-width: 100%;
}

.g-picker-sheet__body :deep(.dp__menu.g-date-picker__menu) {
  width: 100%;
  min-width: 0;
  border: none;
  box-shadow: none;
}
</style>

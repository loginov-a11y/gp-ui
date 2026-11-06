<template>
  <GPagination
    :count="count"
    :total="total"
    :current-page="currentPage"
    :limit="limit"
    :sizes="sizes"
    @page-change="emit('page-change', $event)"
    @limit-change="emit('limit-change', $event)"
  />
</template>

<script setup lang="ts">
import GPagination from '~/ui-kit/GPagination.vue'

defineProps<{
  count: number
  total: number
  currentPage: number
  limit: number
  sizes?: number[]
}>()

const emit = defineEmits<{
  'page-change': [page: number]
  'limit-change': [limit: number]
}>()
</script>

<template>
  <div>
    <template v-if="onlyView">
      <button>
        <img alt="edit" class="w-5 h-5" src="@/assets/edit.svg"/>
      </button>
    </template>
    <button v-else @click="$emit('editAction', id)">
      <img alt="edit" class="w-5 h-5" src="@/assets/edit.svg"/>
    </button>
    <button class="ml-3" @click="$emit('deleteAction', id)">
      <img alt="edit" class="w-5 h-5" src="@/assets/delete.svg"/>
    </button>
  </div>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'editAction', id: string): void
  (e: 'deleteAction', id: string): void
}>()

defineProps<{
  onlyView?: boolean
  id: string
}>()
</script>

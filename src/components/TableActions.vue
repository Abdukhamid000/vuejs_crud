<template>
  <div>
    <template v-if="onlyView">
      <button>
        <img alt="edit" class="w-5 h-5" src="@/assets/edit.svg"/>
      </button>
    </template>
    <button v-else @click="$emit('editAction', item)">
      <img alt="edit" class="w-5 h-5" src="@/assets/edit.svg"/>
    </button>
    <button class="ml-3" @click="$emit('deleteAction', item._id)">
      <img alt="edit" class="w-5 h-5" src="@/assets/delete.svg"/>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {IRegion,} from "@/types/regions.ts";

defineEmits<{
  (e: 'editAction', item: IRegion): void
  (e: 'deleteAction', id: string): void
}>()

defineProps<{
  onlyView?: boolean
  item: IRegion
}>()
</script>

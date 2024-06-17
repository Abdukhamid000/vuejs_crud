<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 :text-white">{{ label }}</label>
    <input
        :placeholder="placeholder"
        :value="modelValue"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
        type="text"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value )"/>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: string
  label: string
  placeholder: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()


</script>


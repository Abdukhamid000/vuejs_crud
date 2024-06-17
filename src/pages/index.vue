<template>
  <div class="p-3">
    <div class="flex items-center justify-between mb-3">
      <h1 class="text-5xl">Regions</h1>
      <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          @click="handleCreate">
        Create region
      </button>
    </div>
    <div v-if="regions.length > 0">
      <table>
        <thead>
        <tr>
          <th class="text-center" colspan="3">
            Name
          </th>
          <th rowspan="2">Active</th>
          <th rowspan="2">CreatedAt</th>
          <th rowspan="2">UpdatedAt</th>
          <th rowspan="2">Actions</th>
        </tr>
        <tr>
          <th>Uz</th>
          <th>Ru</th>
          <th>En</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item of regions">

          <td>{{ item.name.uz }}</td>
          <td>{{ item.name.ru }}</td>
          <td>{{ item.name.en }}</td>
          <td>{{ item.isActive }}</td>
          <td>{{ dayjs(item.createdAt).format('DD-MM-YYYY') }}</td>
          <td>{{ dayjs(item.updatedAt).format('DD-MM-YYYY') }}</td>
          <td>
            <TableActions :item="item" @delete-action="deleteRegion" @edit-action="handleEditRegion"/>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
    <div v-else>No Data</div>
    <Dialog v-if="show" :loading="loading" :text="edit ? 'Edit' : 'Create' " @close="show = false"
            @save="handleSave">
      <template #body>
        <Input v-model="form.uz" label="uz" placeholder="uz"/>
        <Input v-model="form.ru" label="ru" placeholder="ru"/>
        <Input v-model="form.en" label="en" placeholder="en"/>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import TableActions from "@/components/TableActions.vue";
import Dialog from "@/components/Dialog.vue";

import {IRegion, IRegionRes} from "@/types/regions.ts";
import {useApi} from "@/composables/useApi.ts";
import dayjs from 'dayjs'
import Input from "@/components/Input.vue";

const $api = useApi()
const regions = ref([] as IRegion[])
const loading = ref(false)
const show = ref(false)
const editId = ref('')
const edit = ref(false)
const form = reactive({
  uz: '',
  ru: '',
  en: ''
})

function clearForm() {
  form.uz = ''
  form.ru = ''
  form.en = ''
}

function handleCreate() {
  show.value = true
  edit.value = false
  clearForm()
}

function handleSave() {
  if (edit.value) {
    editRegion()
  } else {
    createRegion()
  }
}

async function getRegions() {
  try {
    loading.value = true
    const {data} = await $api.$get<IRegionRes>('/regions')
    regions.value = data.data.items
  } catch (err) {
    alert('Smth went wrong!')
  } finally {
    loading.value = false
  }
}

async function createRegion() {
  try {
    loading.value = true
    await $api.$post(`/regions`, {name: form})
    await getRegions()
    show.value = false
  } catch (err) {
    alert('Smth went wrong!')
  } finally {
    loading.value = false
  }
}

async function editRegion() {
  try {
    await $api.$patch('regions/' + editId.value, {name: form})
    await getRegions()
    show.value = false
  } catch (err) {
    alert('Smth went wrong!')
  }
}

function handleEditRegion({name, _id}: IRegion) {
  show.value = true
  edit.value = true
  form.uz = name.uz
  form.ru = name.ru
  form.en = name.en
  editId.value = _id
}

async function deleteRegion(id: string) {
  if (confirm("Are you sure you want to delete region?")) {
    try {
      await $api.$delete('regions/' + id)
      alert(`${id} deleted successfully.`)
      await getRegions()
      show.value = false
    } catch (err) {
      alert('Smth went wrong!')
    }
  }
}

getRegions()
</script>

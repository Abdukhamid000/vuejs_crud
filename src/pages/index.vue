<template>
  <div>
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
        <td>{{ item.createdAt }}</td>
        <td>{{ item.updatedAt }}</td>
        <td>
          <button>edit</button>
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useApi} from "@/composables/useApi.ts";
import type {IRegion, IRegionRes} from "@/types/regions.ts";

const $api = useApi()
const regions = ref([] as IRegion[])

async function getRegions() {
  const {data} = await $api.$get<IRegionRes>('/regions')
  regions.value = data.data.items
}

getRegions()
</script>

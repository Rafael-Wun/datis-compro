<template>
  <NuxtLink>
    <div class="grid place-content-center p-5 bg-neutral-9 border border-neutral-7 rounded-md">
      <img :src="`/catalog/${props.data.asset}`" class="aspect-square w-full object-cover">
    </div>
    <div class="space-y-1 p-3">
      <span class="text-[10px] lg:text-xs 3xl:text-sm font-medium text-neutral-6 uppercase">{{ categoryData.name }}</span>
      <h5 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ props.data.name }}</h5>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
  import category from '/static/category.json'

  const props = defineProps({
    data: Object,
  })
  const categoryID = props.data.category
  const categoryData = category.items.find(item => item.id === categoryID)
</script>

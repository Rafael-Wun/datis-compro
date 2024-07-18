<template>
  <NuxtLink :to="`/category/${solutionData.category}/${solutionData.id}/${props.data.id}`">
    <div class="grid place-content-center p-5 bg-white border border-neutral-7 rounded-md">
      <img :src="`/catalog/${props.data.asset}`" class="aspect-square w-full object-contain">
    </div>
    <div class="space-y-1 p-3">
      <span class="text-[10px] lg:text-xs 3xl:text-sm font-medium text-neutral-6 uppercase overflow-hidden whitespace-nowrap text-ellipsis">{{ solutionData.name }}</span>
      <h5 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ props.data.name }}</h5>
    </div>
  </NuxtLink>
</template>

<script setup>
  import solutions from '/static/solutions.json'

  const props = defineProps({
    data: Object,
  })
  const solutionID = props.data.category
  const solutionData = solutions.items.find(item => item.id === solutionID)
</script>

<template>
  <NuxtLink :to="`/category/${categoryData.id}/${props.data.id}`">
    <div class="grid place-content-center p-8 bg-white border border-neutral-7 rounded-md">
      <img :src="`/solution/${props.data.asset}`" class="aspect-square w-full object-cover">
    </div>
    <div class="space-y-1 p-3">
      <h5 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ props.data.name }}</h5>
      <p class="text-neutral-6 line-clamp-3">{{ props.data.description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
  import category from '/static/category.json'

  const props = defineProps({
    data: Object,
  })

  const categoryData = category.items.find(item => item.id === props.data.category)
</script>

<template>
  <NuxtLink :to="`/products/${props.data.id}`">
    <div class="grid place-content-center p-5 bg-neutral-9 border border-neutral-7 rounded-md">
      <img :src="`/category/${props.data.asset}`" class="aspect-square w-full object-cover">
    </div>
    <div class="space-y-1 p-3">
      <h5 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ props.data.name }}</h5>
      <p class="text-neutral-6">{{ props.data.description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    data: Object,
  })
</script>

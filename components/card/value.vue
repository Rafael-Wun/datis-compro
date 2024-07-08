<template>
  <NuxtLink :to="`/solutions/${data.id}`" class="card flex flex-col justify-between gap-5 px-2 py-3 lg:p-4 rounded-md">
    <div class="flex flex-col gap-3">
      <h6>{{ data.name }}</h6>
      <p class="text-neutral-6 text-xs">{{ data.description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    data: Object,
  })
</script>

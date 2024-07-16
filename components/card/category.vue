<template>
  <NuxtLink :to="`/solutions/${data.id}`" class="card overflow-clip relative flex flex-col justify-between gap-8 px-4 py-6 rounded-md">
    <img :src="`/icon/${data.icon}`" class="absolute z-10 opacity-25 -top-10 -right-10 size-40">
    <div class="relative z-20 flex flex-col gap-3">
      <div class="flex justify-between items-center gap-2 h-16">
        <h6>{{ data.name }}</h6>
        <span class="icon-[ph--arrow-right-bold] min-w-6 size-6 xl:min-w-8 xl:size-8" />
      </div>
      <p class="text-neutral-6 text-sm">{{ data.description }}</p>
    </div>
    <div class="relative z-20 flex flex-wrap gap-3">
      <NuxtLink :to="`/solutions/${data.id}/${solution.id}`" 
        v-for="solution in solutionData" :key="solution.id"
        class="px-2 py-1 text-[10px] xl:text-[11px] text-primary bg-primary bg-opacity-20 rounded-sm">
        {{ solution.name }}
      </NuxtLink>
    </div>
  </NuxtLink>
</template>

<script setup>
  import solutions from '/static/solutions.json'

  const props = defineProps({
    data: Object,
  })

  const solutionData = solutions.items.filter(item => item.category === props.data.id)
</script>

<template>
  <div class="space-y-5 md:space-y-8 w-4/5 md:w-8/12 lg:w-[600px]">
    <div
      v-if="header"
      class="inline-block px-3 lg:px-5 py-2 lg:py-3 text-[10px] md:text-[11px] lg:text-sm font-medium text-primary bg-primary bg-opacity-25 rounded-[4px] md:rounded-md">
      {{ header }}
    </div>
    <div class="space-y-2">
      <h3 :class="{ 'text-neutral-9': light }">{{ title }}</h3>
      <p :class="light ? 'text-neutral-8' : 'text-neutral-6' "><slot/></p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    header: String,
    title: String,
    light: Boolean,
  })
</script>

<template>
  <div class="overflow-clip bg-white rounded-md">
    <NuxtLink
      :to="`/${props.path}`"
      class="block p-3 text-neutral-9 bg-primary">
      <h6>Other {{ title }}</h6>
    </NuxtLink>
    <ul class="py-2 border-x border-b border-neutral-7 rounded-b-md">
      <li
        v-for="item in data" :key="item.id"
        class="px-5 py-3 whitespace-nowrap">
        <NuxtLink :to="`/${childPath}/${item.id}`" class="hover:text-primary">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: Object,
    title: String,
    path: String,
    childPath: String,
  })

</script>

<style scoped>
.router-link-active {
  @apply text-primary;
  @apply font-medium;
}
</style>

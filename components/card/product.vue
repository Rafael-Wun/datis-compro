<template>
  <div class='flex gap-10 px-4 py-6 bg-white border border-neutral-7 rounded-md'>
    <div class='grid place-content-center min-w-24 size-24'>
      <img :src="`/product/${props.asset}`" />
    </div>
    <div>
      <!-- {{ $.vnode.key }} -->
      <ContentDoc :path="`/product/${$.vnode.key}`" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  asset: String,
})
</script>

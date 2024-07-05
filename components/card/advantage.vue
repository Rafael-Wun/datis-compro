<template>
  <div class="card group flex flex-col justify-center items-center gap-3 aspect-square text-center hover:bg-primary rounded-md">
    <div class='size-16 group-hover:hidden'>
			<img :src="`/icon/${data.icon}`" />
		</div>
    <div class="space-y-2 w-4/5">
      <h6 class='pt-4 text-neutral-2 group-hover:hidden'>{{ data.title }}</h6>
      <p class="hidden md:block text-neutral-5 group-hover:hidden">{{ data['preview-description'] }}</p>
      <p class='md:hidden group-hover:block text-neutral-5 group-hover:text-neutral-9'>{{ data.description }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: Object,
  })
</script>

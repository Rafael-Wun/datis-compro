<script setup>
	const props = defineProps({
		data: Object,
	})
</script>

<template>
  <NuxtLink
		:to="`/services/${data.id}`"
		class="card flex md:flex-col items-center md:items-start gap-5 p-6 md:aspect-square rounded-md">
		<div class="aspect-square min-w-8 size-8 md:min-w-10 md:size-10 lg:min-w-12">
			<img :src="`icon/${data.icon}`" />
		</div>
		<div class="space-y-2">
			<h5 class="text-neutral-1 font-semibold">{{ data.name }}</h5>
			<p class="text-neutral-6 md:line-clamp-2 lg:line-clamp-none">{{ data.description }}</p>
		</div>
	</NuxtLink>
</template>

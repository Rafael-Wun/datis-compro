<template>
  <NuxtLink
		:to="`/${path}/${data.id}`"
		class="card overflow-hidden flex md:flex-col items-center md:items-start gap-5 lg:gap-8 p-6 md:aspect-square rounded-md">
		<div class="aspect-square min-w-8 size-8 md:min-w-10 md:size-10 lg:min-w-12">
			<img :src="`icon/${data.icon}`" />
		</div>
		<div class="space-y-2 w-full">
			<h5 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ data.name }}</h5>
			<p class="text-neutral-6 line-clamp-6">{{ data.description }}</p>
		</div>
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({
		data: Object,
		path: String,
	})
</script>

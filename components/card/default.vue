<template>
  <NuxtLink
		:to="`/${path}/${data.id}`"
		class="card overflow-hidden flex flex-col items-center md:items-start gap-3 p-6 md:aspect-square max-h-80 4xl:max-h-96 rounded-md">
		<div class="flex md:flex-col gap-3 w-full">
			<img :src="`icon/${data.icon}`" class="aspect-square min-w-8 min-h-8 size-8 md:min-w-10 md:min-h-10 md:size-10 xl:min-w-12 xl:min-h-12 xl:size-12" />
			<h5 class="overflow-hidden text-ellipsis whitespace-nowrap">{{ data.name }}</h5>
		</div>
		<div class="space-y-2 w-full">
			<p class="text-neutral-6 line-clamp-none md:line-clamp-4 lg:line-clamp-6">{{ data.description }}</p>
		</div>
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({
		data: Object,
		path: String,
	})
</script>

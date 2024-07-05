<template>
  <SectionDefault>
    <div class="flex flex-col lg:flex-row gap-5 xl:gap-10">
      <div class="space-y-5">
        <h3>{{ normalizedTexts(id) }}</h3>
        <ContentDoc :path="`/services/${id}`" />
      </div>
      <div class="overflow-clip bg-white rounded-md">
        <NuxtLink to="/services" class="block p-3 text-neutral-9 bg-primary">
          <h5>Other Services</h5>
        </NuxtLink>
        <ul class="py-2 border-x border-b border-neutral-7 rounded-b-md">
          <li
            v-for="service in services.items" :key="service.id"
            class="px-5 py-3 whitespace-nowrap">
            <NuxtLink :to="`/services/${service.id}`">{{ service.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink to="/contact-us" class="button primary">Contact Us Now</NuxtLink>
  </SectionDefault>
</template>

<script lang="ts" setup>
  import services from '/static/services.json'

  const { id } = useRoute().params
  const normalizedTexts = (raw) => {
    return raw
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const route = useRoute()
	route.meta.title = normalizedTexts(id)

  useHead({
    title: normalizedTexts(id)
  })
</script>

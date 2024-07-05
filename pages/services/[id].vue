<template>
  <SectionDefault>
    <div class="flex flex-col lg:flex-row gap-5 xl:gap-10">
      <div class="space-y-5">
        <h3>{{ serviceData.name }}</h3>
        <ContentDoc :path="`/services/${id}`" />
      </div>
      <div class="overflow-clip bg-white rounded-md">
        <NuxtLink to="/services" class="block p-3 text-neutral-9 bg-primary">
          <h6>Other Services</h6>
        </NuxtLink>
        <ul class="py-2 border-x border-b border-neutral-7 rounded-b-md">
          <li
            v-for="service in services.items" :key="service.id"
            class="px-5 py-3 whitespace-nowrap">
            <NuxtLink :to="`/services/${service.id}`" class="hover:text-primary">{{ service.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink to="/contact-us" class="button button-hover primary">Contact Us Now</NuxtLink>
  </SectionDefault>
</template>

<script lang="ts" setup>
  import services from '/static/services.json'

  const { id } = useRoute().params
  const serviceData = services.items.find(item => item.id === id)

  const route = useRoute()
	route.meta.title = serviceData.name

  useHead({
    title: serviceData.name
  })
</script>

<template>
  <SectionDefault>
    <div class="flex flex-col lg:flex-row gap-5 xl:gap-10 w-full">
      <div class="space-y-5 w-full">
        <h4>{{ serviceData.name }}</h4>
        <ContentDoc :path="`/services/${id}`" />
      </div>
      <Shortcut :data="services.items" title="Services" path="services" childPath="services"/>
    </div>
    <NuxtLink to="/contact-us" class="button button-hover primary">Contact Us Now</NuxtLink>
  </SectionDefault>
</template>

<script setup>
  import services from '/static/services.json'

  definePageMeta({
    meta: [
      {
        name: 'description',
        content: serviceData.description,
      },
    ],
  });

  const { id } = useRoute().params
  const serviceData = services.items.find(item => item.id === id)

  const route = useRoute()
	route.meta.title = serviceData.name
</script>

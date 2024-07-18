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

  const serviceData = computed(() => {
    const { id } = useRoute().params
    return services.items.find(item => item.id === id)
  })

  const route = useRoute()
  
  watch(serviceData, (newServiceData) => {
    useHead({
      meta: [
        {
          name: 'description',
          content: newServiceData.description,
        },
      ],
    })
    route.meta.title = newServiceData.name
  }, { immediate: true })
</script>

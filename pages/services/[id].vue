<template>
  <SectionDefault>
    <div class="flex flex-col lg:flex-row gap-5 xl:gap-10 w-full">
      <div class="space-y-5 w-full">
        <h4>{{ serviceData.name }}</h4>
        <ContentDoc :path="`/services/${serviceData.id}`" />
      </div>
      <div class="flex md:flex-col gap-5 xl:gap-10">
        <div v-if="otherService.length > 0" class="overflow-clip bg-white rounded-md">
          <NuxtLink :to="`/services`" class="block p-3 text-neutral-9 bg-primary">
            <h6>Other Services</h6>
          </NuxtLink>
          <ul class="py-2 min-w-64 border-x border-b border-neutral-7 rounded-b-md">
            <li
              v-for="item in otherService" :key="item.id"
              class="px-5 py-3 whitespace-nowrap">
              <NuxtLink :to="`/services/${item.id}`" class="hover:text-primary">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
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
  const otherService = ref()

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
    otherService.value = services.items.filter(item => item.id !== newServiceData.id)
    route.meta.title = newServiceData.name
  }, { immediate: true })
</script>

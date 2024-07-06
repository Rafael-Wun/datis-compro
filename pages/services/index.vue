<template>
  <SectionDefault>
    <SectionHeading
      :header="services.header"
      :title="services.title"
      class="mx-auto text-center">
      {{ services.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-3 4xl:grid-cols-4 gap-5 xl:gap-10">
      <CardDefault
        v-for="service in services.items" :key="service.id"
        :data="service"
        path="services" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import services from '/static/services.json'

  useHead({
    title: 'Services'
  })

  const route = useRoute()
  route.meta.title = 'Services'
</script>

<template>
  <SectionDefault>
    <SectionHeading
      :header="services.header"
      :title="services.title"
      class="mx-auto text-center">
      {{ services.description }}
    </SectionHeading>
    <!-- flex flex-wrap justify-center -->
    <div class="grid grid-cols-1 3xl:flex 3xl:flex-wrap 3xl:justify-center md:grid-cols-3 gap-5 xl:gap-10">
      <CardService
        v-for="service in services.items" :key="service.id"
        :data="service"
        path="services" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import services from '/static/services.json'

  definePageMeta({
    meta: [
      {
        name: 'description',
        content: 'More than just IoT, we offer a comprehensive range of IT services. Discover our diverse categories tailored to meet your unique needs, driving success and satisfaction.',
      },
    ],
  });

  const route = useRoute()
  route.meta.title = 'Services'
</script>

<template>
  <SectionDefault>
    <SectionHeading
      :header="categories.header"
      :title="categories.title"
      class="mx-auto text-center">
      {{ categories.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-5">
      <CardCategory
        v-for="category in categories.items" :key="category.id"
        :data="category" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import categories from '/static/category.json'

  definePageMeta({
    meta: [
      {
        name: 'description',
        content: 'Find the perfect solutions for your building needs. We offer customizable smart building solutions, fire safety systems, and advanced security systems.',
      },
    ],
  })
  
  const route = useRoute()
	route.meta.title = 'Solutions'
</script>

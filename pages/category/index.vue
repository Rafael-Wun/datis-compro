<template>
  <SectionDefault>
    <SectionHeading
      :header="category.header"
      :title="category.title"
      class="mx-auto text-center">
      {{ category.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-5">
      <CardCategory
        v-for="item in category.items" :key="item.id"
        :data="item" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import category from '/static/category.json'

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

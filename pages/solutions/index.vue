<template>
  <SectionDefault>
    <SectionHeading
      :header="category.header"
      :title="category.title"
      class="mx-auto text-center">
      {{ category.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-3 4xl:grid-cols-4 gap-5 xl:gap-10">
      <CardDefault
        v-for="category in category.items" :key="category.id"
        :data="category"
        path="solutions" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import category from '/static/category.json'

  useHead({
    title: 'Solutions'
  })
  
  const route = useRoute()
	route.meta.title = 'Solutions'
</script>

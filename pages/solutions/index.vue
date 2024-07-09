<template>
  <SectionDefault>
    <SectionHeading
      :header="categories.header"
      :title="categories.title"
      class="mx-auto text-center">
      {{ categories.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardCategory
        v-for="category in categories.items" :key="category.id"
        :data="category" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import categories from '/static/category.json'
  
  const route = useRoute()
	route.meta.title = 'Solutions'
</script>

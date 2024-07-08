<template>
  <SectionDefault>
    <div class="space-y-5 w-full">
      <h4>{{ categoryData.name }}</h4>
      <p><ContentDoc :path="`/category/${id}`" /></p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 4xl:grid-cols-4 gap-5 xl:gap-10">
      <CardSolution
        v-for="solution in solutionData(categoryData.id)" :key="solution.id"
        :data="solution" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import category from '/static/category.json'
  import solutions from '/static/solutions.json'

  const { id } = useRoute().params
  const categoryData = category.items.find(item => item.id === id)
  const solutionData = (categoryID) => {
    return solutions.items.filter(item => item.category === categoryID)
  }

  const route = useRoute()
	route.meta.title = categoryData.name

  useHead({
    title: categoryData.name
  })
</script>

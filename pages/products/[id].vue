<template>
  <SectionDefault>
    <div class="flex flex-col lg:flex-row gap-5 xl:gap-10">
      <div class="space-y-5 w-full">
        <h4>{{ solutionData.name }}</h4>
        <ContentDoc :path="`/solutions/${id}`" />
      </div>
      <div class="flex flex-col gap-5 xl:gap-10">
        <Shortcut :data="otherSolution" :title="solutionDetail.name" path="solutions" childPath="products" />
        <Shortcut :data="category.items" title="Solutions" path="solutions" childPath="solutions" />
      </div>
    </div>
  </SectionDefault>
</template>

<script setup>
  import solutions from '/static/solutions.json'
  import category from '/static/category.json'

  const { id } = useRoute().params
  const solutionData = solutions.items.find(item => item.id === id)
  const solutionDetail = category.items.find(item => item.id === solutionData.category)
  const otherSolution = solutions.items.filter(item => item.category === solutionData.category)

  const route = useRoute()
	route.meta.title = solutionData.name

  useHead({
    title: solutionData.name
  })
</script>

<style>

</style>
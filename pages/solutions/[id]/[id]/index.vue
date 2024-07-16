<template>
  <SectionDefault>
    <div class="flex flex-col md:flex-row gap-5 md:gap-10">
      <div class="flex flex-col gap-5 md:gap-10 w-full">
        <div class="space-y-5 w-full">
          <h4>{{ solutionData.name }}</h4>
          <ContentDoc :path="`/solutions/${id}`" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-5 xl:gap-10">
          <CardCatalog
            v-for="catalog in catalogData" :key="catalog.id"
            :data="catalog">
          </CardCatalog>
        </div>
      </div>
      <div class="flex md:flex-col gap-5 xl:gap-10">
        <Shortcut :data="otherSolution" :title="solutionDetail.name" path="solutions" :childPath="`solutions/${solutionDetail.id}`" />
        <Shortcut :data="category.items" title="Solutions" path="solutions" childPath="solutions" />
      </div>
    </div>
    <NuxtLink to="/contact-us"class="button button-hover primary">Contact Us Now</NuxtLink>
  </SectionDefault>
</template>

<script setup>
  import solutions from '/static/solutions.json'
  import category from '/static/category.json'
  import catalog from '/static/catalog.json'

  definePageMeta({
    meta: [
      {
        name: 'description',
        content: solutionData.description,
      },
    ],
  });

  const { id } = useRoute().params
  const solutionData = solutions.items.find(item => item.id === id)
  const solutionDetail = category.items.find(item => item.id === solutionData.category)
  const otherSolution = solutions.items.filter(item => item.category === solutionData.category)
  const catalogData = catalog.items.filter(item => item.category === solutionData.id)

  const route = useRoute()
	route.meta.title = solutionData.name
</script>

<style>

</style>
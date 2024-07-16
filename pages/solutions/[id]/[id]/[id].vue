<template>
  <SectionDefault>
    <div class="flex flex-col md:flex-row gap-5 md:gap-10">
      <div class="space-y-5 w-full">
        <h4>{{ catalogData.name }}</h4>
        <ContentDoc :path="`/catalog/${id}`" />
      </div>
      <div class="flex md:flex-col gap-5 xl:gap-10">
        <Shortcut :data="otherCatalog" :title="solutionDetail.name" path="products" childPath="products" />
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <div class="space-x-1">
        <span>Learn more about: </span>
        <NuxtLink :to="`/solutions/${solutionDetail.category}/${solutionDetail.id}`" class="underline-fx p-1 text-primary font-medium">{{ solutionDetail.name }}</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/contact-us"class="button button-hover primary">Contact Us Now</NuxtLink>
      </div>
    </div>
  </SectionDefault>
</template>

<script setup>
  import catalog from '/static/catalog.json'
  import solutions from '/static/solutions.json'

  definePageMeta({
    meta: [
      {
        name: 'description',
        content: catalogData.description,
      },
    ],
  });

  const { id } = useRoute().params
  const catalogData = catalog.items.find(item => item.id === id)
  const solutionDetail = solutions.items.find(item => item.id === catalogData.category)
  const otherCatalog = catalog.items.filter(item => item.category === solutionDetail.id)

  const route = useRoute()
  route.meta.title = catalogData.name

  useHead({
    title: catalogData.name
  })
</script>

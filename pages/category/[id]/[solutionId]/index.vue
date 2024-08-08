<template>
  <SectionDefault>
    <div class="flex flex-col md:flex-row gap-5 md:gap-10">
      <div class="flex flex-col gap-5 md:gap-10 w-full">
        <div class="space-y-5 w-full">
          <h4>{{ solutionData.name }}</h4>
          <ContentDoc :path="`/solutions/${solutionData.id}`" />
          <CardProduct 
            v-for='product in catalogData' :key='product.id'
            :asset='product.asset' />
        </div>
      </div>
      <div class="flex flex-col gap-5 xl:gap-10">
        <div v-if="otherSolution.length > 0" class="overflow-clip bg-white rounded-md">
          <NuxtLink :to="`/category/${categoryData.id}`" class="block p-3 text-neutral-9 bg-primary">
            <h6>{{ categoryData.name }}</h6>
          </NuxtLink>
          <ul class="py-2 min-w-64 border-x border-b border-neutral-7 rounded-b-md">
            <li
              v-for="item in otherSolution" :key="item.id"
              class="px-5 py-3 whitespace-nowrap">
              <NuxtLink :to="`/category/${categoryData.id}/${item.id}`" class="hover:text-primary">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="overflow-clip bg-white rounded-md">
          <NuxtLink to="/category" class="block p-3 text-neutral-9 bg-primary">
            <h6>Other Category</h6>
          </NuxtLink>
          <ul class="py-2 min-w-64 border-x border-b border-neutral-7 rounded-b-md">
            <li
              v-for="item in category.items" :key="item.id"
              class="px-5 py-3 whitespace-nowrap">
              <NuxtLink :to="`/category/${item.id}`" class="hover:text-primary">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- <div v-if="catalogData.length > 0" class="overflow-clip bg-white rounded-md">
          <div class="block p-3 text-neutral-9 bg-primary">
            <h6>Product Catalog</h6>
          </div>
          <ul class="py-2 min-w-64 border-x border-b border-neutral-7 rounded-b-md">
            <li
              v-for="item in catalogData" :key="item.id"
              class="px-5 py-3 whitespace-nowrap">
              <NuxtLink class="hover:text-primary">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <NuxtLink to="/contact-us"class="button button-hover primary">Contact Us Now</NuxtLink>
  </SectionDefault>
</template>

<script setup>
  import category from '/static/category.json'
  import solutions from '/static/solutions.json'
  import catalog from '/static/catalog.json'

  const route = useRoute()

  const solutionData = computed(() => {
    const { solutionId } = useRoute().params
    return solutions.items.find(item => item.id === solutionId)
  })
  const categoryData = ref()
  const otherSolution = ref()
  const catalogData = ref()
  
  watch(solutionData, (newSolutionData) => {
    useHead({
      meta: [
        {
          name: 'description',
          content: newSolutionData.description,
        },
      ],
    })
    categoryData.value = category.items.find(item => item.id === newSolutionData.category)
    otherSolution.value = solutions.items.filter(item => item.category === newSolutionData.category)
    catalogData.value = catalog.items.filter(item => item.category === newSolutionData.id)
    route.meta.title = newSolutionData.name
  }, { immediate: true })
</script>

<style scoped>
.router-link-active {
  @apply font-medium;
  @apply text-primary;
}
</style>

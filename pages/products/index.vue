<template>
  <SectionDefault>
    <div>
      <div class="px-2 border-b border-neutral-7">
        <Swiper
          :modules="[SwiperPagination]"
          :slides-per-view="3"
          :centered-slides="false"
          :space-between="16"
          :breakpoints="breakpoints">
          <SwiperSlide>
            <label
              class="cursor-pointer"
              :class="{ 'active': selectedCategory === '' }">
              <input 
                type="radio"  
                name="category" 
                value=""
                v-model="selectedCategory" 
                class="hidden cursor-pointer">
              All Category
            </label>
          </SwiperSlide>
          <SwiperSlide v-for="item in category.items" :key="item.id" class="pb-2">
          <label
            class="cursor-pointer"
            :class="{ 'active': selectedCategory === item.id }">
            <input 
              type="radio" 
              name="category" 
              :value="item.id"
              v-model="selectedCategory" 
              class="hidden cursor-pointer">
            {{ item.name }}
          </label>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="flex gap-5 xl:gap-10">
        <div 
          v-if="selectedCategory"
          class="flex flex-col gap-10 border-r border-neutral-7 pt-10 pr-6 min-w-36 w-36 lg:min-w-60">
          <label
            class="cursor-pointer"
            :class="{ 'active': selectedSolution === '' }">
            <input 
              type="radio"  
              name="category" 
              value=""
              v-model="selectedSolution" 
              class="hidden" checked>
            All Solutions
          </label>
          <label
            class="cursor-pointer" 
            v-for="item in filteredSolutions" :key="item.id"
            :class="{ 'active': selectedSolution === item.id }">
            <input 
              type="radio" 
              name="solutions" 
              :value="item.id"
              v-model="selectedSolution" 
              class="hidden cursor-pointer">
            {{ item.name }}
          </label>
        </div>
        <div 
          class="grid md:grid-cols-3 gap-5 xl:gap-10 pt-10 w-full"
          :class="selectedCategory ? 'grid-cols-1' : 'grid-cols-2'">
          <CardCatalog
            v-for="item in filteredCatalog" :key="item.id"
            :data="item" />
        </div>
      </div>
    </div>
  </SectionDefault>
</template>

<script setup>
  import category from '/static/category.json'
  import solutions from '/static/solutions.json'
  import catalog from '/static/catalog.json'

  const selectedCategory = ref('')
  const selectedSolution = ref('')

  const filteredSolutions = computed(() => {
    if (selectedCategory.value) {
      return solutions.items.filter(item => item.category === selectedCategory.value)
    } else {
      return []
    }
  })
  
  const filteredCatalog = computed(() => {
    if (selectedCategory.value && selectedSolution.value) {
      return catalog.items.filter(item => item.category === selectedSolution.value)
    } else if (selectedCategory.value) {
      if (selectedSolution.value === '') {
        const solutionCategories = filteredSolutions.value.map(item => item.id);
        return catalog.items.filter(item => solutionCategories.includes(item.category));
      }
      return catalog.items.filter(item => item.category === selectedCategory.value);
    } else {
      return catalog.items
    }
  })

  watch(selectedCategory, () => {
    selectedSolution.value = ''
  })

  useHead({
    title: 'Products'
  })
  
  const route = useRoute()
	route.meta.title = 'Products'

  const breakpoints = {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
</script>

<style scoped>
.active {
  @apply text-primary;
  @apply font-semibold;
}
</style>
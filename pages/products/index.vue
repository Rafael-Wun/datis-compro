<template>
  <SectionDefault>
    <div>
      <Swiper
        :modules="[SwiperPagination]"
        :slides-per-view="6"
        spaceBetween="10"
        class="border-b border-neutral-7"
        :breakpoints="swiperBreakpoints">
        <SwiperSlide>
          <label
            class="cursor-pointer"
            :class="{ 'text-primary': selectedCategory === '' }">
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
          class="cursor-pointer" :class="{ 'text-primary': selectedCategory === item.id }">
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
      <div class="flex gap-10">
        <div 
          v-if="selectedCategory"
          class="flex flex-col gap-10 border-r border-neutral-7 pt-10 pr-6 w-48 lg:min-w-60">
          <label
            class="cursor-pointer"
            :class="{ 'text-primary': selectedSolution === '' }">
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
            :class="{ 'text-primary': selectedSolution === item.id }">
            <input 
              type="radio" 
              name="solutions" 
              :value="item.id"
              v-model="selectedSolution" 
              class="hidden cursor-pointer">
            {{ item.name }}
          </label>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10 pt-10">
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

  const swiperBreakpoints = {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6,
    }
  }
</script>

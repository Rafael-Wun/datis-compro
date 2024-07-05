<template>
  <SectionDefault>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10">
      <CardProduct
        v-for="item in catalog.items" :key="item.id"
        :data="item" />
    </div>
  </SectionDefault>
</template>

<script setup>
  import catalog from '/static/catalog.json'

  useHead({
    title: 'Products'
  })
  
  const route = useRoute()
	route.meta.title = 'Products'
</script>

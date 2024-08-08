<template>
  <nav aria-label="breadcrumb" class="hidden md:block">
    <ul class="flex gap-2">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="text-neutral-9">
        <NuxtLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">{{ crumb.name }} / </NuxtLink>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(p => p)

  const normalizeText = (raw) => {
    const words = raw.toUpperCase().split('-')
    return words.map(word => word.slice(0)).join(' ')
  }

  const crumbs = pathArray.map((path, index) => {
    const fullPath = '/' + pathArray.slice(0, index + 1).join('/')
    return {
      path: fullPath,
      name: normalizeText(path)
    }
  })

  return [{ path: '/', name: 'HOME' }, ...crumbs]
})
</script>

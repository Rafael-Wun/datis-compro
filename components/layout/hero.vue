<template>
  <div v-if="$route.path != '/'">
    <img src="@/assets/img/hero-bg.jpg" class="absolute inset-0 z-0 w-full h-48 md:h-64 lg:h-80 object-cover brightness-50" />
    <div class="relative z-10 flex flex-col justify-end gap-10 mx-4 md:mx-8 xl:mx-auto pb-10 md:pb-14 lg:pb-20 w-auto xl:w-4/5 h-48 md:h-64 lg:h-80 text-neutral-9">
      <div class="space-y-2">
        <h3 v-if="$route.meta.title">{{ $route.meta.title }}</h3>
        <nav aria-label="breadcrumb">
          <ul>
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="inline text-neutral-9">
              <NuxtLink v-if="index < breadcrumbs.length - 1" :to="crumb.path">{{ crumb.name }} / </NuxtLink>
              <span v-else>{{ crumb.name }}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div v-else>
    <img src="@/assets/img/hero-bg.jpg" class="absolute inset-0 z-0 w-full h-[440px] md:h-[520px] lg:h-[640px] object-cover brightness-50" />
    <div class="relative z-10 flex flex-col justify-end gap-10 mx-4 md:mx-8 xl:mx-auto pb-10 md:pb-14 lg:pb-20 w-auto xl:w-4/5 h-[440px] md:h-[520px] lg:h-[640px]">
      <NuxtLink to="/services">
        <div class="hidden md:flex items-center gap-1 w-min p-1 pr-2 bg-neutral-9 text-xs whitespace-nowrap rounded-md"><span class="bg-primary p-1 text-neutral-9 rounded-[4px]">New!</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="icon-[ph--caret-right-bold]" /></div>
      </NuxtLink>
      <div class="space-y-3">
        <h2 class="w-4/5 md:w-[480px] text-neutral-9 leading-tight">Empowering a Connected Future</h2>
        <p class="w-4/5 md:w-[480px] text-neutral-8">It involves creating an environment where people have access to the necessary tools, resources, and opportunities to fully participate in the digital world and leverage its potential to improve their lives.</p>
      </div>
      <div class="space-x-5">
        <NuxtLink target="/about" class="button button-hover-rev primary">Get to Know Us</NuxtLink>
        <NuxtLink target="/solutions" class="button button-hover-rev secondary">Our Solutions</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(p => p)
  const normalizedTexts = (raw) => {
    return raw
      .toLowerCase()
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  const crumbs = pathArray.map((path, index) => {
    const fullPath = '/' + pathArray.slice(0, index + 1).join('/')
    return {
      path: fullPath,
      name: normalizedTexts(path)
    }
  })
  return [{ path: '/', name: 'Home' }, ...crumbs]
})
</script>

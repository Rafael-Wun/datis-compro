<template>
  <div v-if="$route.path != '/'">
    <img src="@/assets/img/hero-bg.jpg" class="absolute inset-0 z-0 w-full h-52 md:h-64 lg:h-80 object-cover brightness-50" />
    <div class="relative z-10 flex flex-col justify-end gap-10 mx-4 md:mx-8 xl:mx-auto pb-10 md:pb-14 lg:pb-20 w-auto xl:w-4/5 h-52 md:h-64 lg:h-80 text-neutral-9">
      <div class="space-y-2">
        <h3 v-if="$route.meta.title">{{ $route.meta.title }}</h3>
        <LayoutBreadcumb />
      </div>
    </div>
  </div>
  <div v-else>
    <img src="@/assets/img/hero-bg.jpg" class="absolute inset-0 z-0 w-full h-[400px] md:h-[520px] lg:h-[640px] object-cover brightness-50" />
    <div class="relative z-10 flex flex-col justify-end gap-10 mx-4 md:mx-8 xl:mx-auto pb-10 md:pb-14 lg:pb-20 xl:pb-32 w-auto xl:w-4/5 h-[400px] md:h-[520px] lg:h-[640px]">
      <!-- <NuxtLink to="/services">
        <div class="hidden md:flex items-center gap-1 w-min p-1 pr-2 bg-neutral-9 text-xs whitespace-nowrap rounded-md"><span class="bg-primary p-1 text-neutral-9 rounded-[4px]">New!</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="icon-[ph--caret-right-bold]" /></div>
      </NuxtLink> -->
      <div class="space-y-3">
        <div>
          <h2 class="w-4/5 md:w-[600px] text-neutral-9 leading-tight">Your Trusted Partner in</h2>
          <div class="typewriter">
            <h2 class="w-4/5 md:w-[600px] text-neutral-9 leading-tight"><span>{{ displayText }}</span><span class="cursor-fx">|</span></h2>
          </div>
        </div>
        <p class="w-4/5 md:w-[480px] text-neutral-8">We provide product, service and solution of the highest quality and deliver more value to our customers that earns their respect and loyality</p>
      </div>
      <div class="space-x-5">
        <NuxtLink to="/about-us" class="button button-hover-rev primary">Get to Know Us</NuxtLink>
        <NuxtLink to="/contact-us" class="button button-hover-rev secondary">Start a Project</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const texts = ['Engineering', 'Technology', 'Products']
  const displayText = ref('')

  let currentIndex = 0
  let charIndex = 0
  let textsLength = texts.length

  const typeText = () => {
    if (currentIndex === textsLength) {
      currentIndex = 0
    }

    if (charIndex < texts[currentIndex].length) {
      displayText.value += texts[currentIndex].charAt(charIndex)
      charIndex++
      setTimeout(typeText, 100)
    } else {
      setTimeout(deleteText, 2000)
    }
  }

  const deleteText = () => {
    if (charIndex > 0) {
      displayText.value = displayText.value.slice(0, -1)
      charIndex--
      setTimeout(deleteText, 100)
    } else {
      currentIndex = (currentIndex + 1)
      charIndex = 0
      setTimeout(typeText, 100)
    }
  }

  const startTyping = () => {
    typeText()
  }

  onMounted(() => {
    startTyping()
  })
</script>

<style scoped>
.cursor-fx {
  animation: blink 0.5s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
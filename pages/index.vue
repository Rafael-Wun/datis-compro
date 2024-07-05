<template>
  <SectionDefault>
    <SectionHeading
      :header="advantages.header"
      :title="advantages.title"
      class="mx-auto text-center">
      {{ advantages.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10">
      <CardAdvantage
        v-for="(advantage, index) in advantages.items" :key="index"
        :data="advantage" />
    </div>
  </SectionDefault>
  <div class="relative">
    <img src="@/assets/img/service-bg.jpg" class="hidden md:block absolute z-0 top-0 right-0 w-1/2 h-full object-cover">
    <div class="relative z-10 text-neutral-9 bg-gradient-to-r from-primary via-primary to-primary md:to-neutral-9/0">
      <SectionDefault>
        <div class="hidden md:flex gap-5">
          <NuxtLink v-for="service in featuredServices" :key="service.id"
          :to="`/services/${service.id}`"
          class="flex items-center gap-2 px-3 lg:px-5 py-2 lg:py-3 text-[9px] md:text-[11px] lg:text-sm font-medium text-neutral-2 bg-neutral-9 rounded-[4px] md:rounded-md">
            {{ service.name }}
            <span class="icon-[ph--caret-right-bold] aspect-square w-2 md:w-4" />
          </NuxtLink>
        </div>
        <SectionHeading
          title="Discover Our Services"
          light="true">
          More than just IoT, we offer a comprehensive range of IT services. Discover our diverse solutions tailored to meet your unique needs, driving success and satisfaction.
        </SectionHeading>
        <NuxtLink to="/services" class="button secondary">View All Services</NuxtLink>
      </SectionDefault>
    </div>
  </div>
  <SectionDefault>
    <SectionHeading
      :header="achievements.header"
      :title="achievements.title"
      class="mx-auto text-center">
      {{ achievements.description }}
    </SectionHeading>
    <div class="grid grid-cols-3 gap-[2px] bg-neutral-7">
      <div
        v-for="(item, index) in achievements.items" :key="index"
        class="grid place-content-center gap-2 py-5 text-center bg-neutral-9">
        <h4>{{ item.value }}</h4>
        <p class="text-[9px] md:text-[11px] lg:text-xs font-medium text-neutral-6 uppercase">{{ item.label }}</p>
      </div>
    </div>
    <div class="text-center">
      <NuxtLink to="/about-us" class="button primary">Get to Know Us</NuxtLink>
    </div>
  </SectionDefault>
  <div class="relative">
    <img src="@/assets/img/contact-bg.jpg" class="hidden md:block absolute z-0 top-0 left-0 w-1/2 h-full object-cover">
    <div class="relative z-10 flex justify-end text-neutral-9 bg-gradient-to-l from-primary via-primary to-primary md:to-neutral-9/0">
      <div class="space-y-10 md:space-y-16 lg:space-y-20 mr-4 md:mr-8 lg:mr-32 py-10 md:py-16 xl:py-24 w-[480px] xl:w-[600px]">
        <div class="space-y-2">
          <h3>Connect with Us Today</h3>
          <p class="text-neutral-8">We'd love to connect with you! Whether you're curious, have feedback, or just want to chat, our team is here to help.</p>
        </div>
        <NuxtLink to="/contact-us" class="button secondary">Contact Now</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import advantages from '/static/advantages.json'
  import services from '/static/services.json'
  import achievements from '/static/achievements.json'

  useHead({
    title: 'Home'
  })

  const featuredServices = services.items.slice(0, 3)
</script>

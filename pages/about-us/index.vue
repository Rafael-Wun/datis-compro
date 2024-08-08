<template>
  <SectionDefault>
    <div class="space-y-5">
      <div class="inline-block px-3 lg:px-5 py-2 lg:py-3 text-[10px] md:text-[11px] lg:text-sm font-medium text-primary bg-primary bg-opacity-25 rounded-[4px] md:rounded-md">{{ overview.header }}</div>
      <h3 class="max-w-[600px] 4xl:max-w-[720px]">{{ overview.title }}</h3>
      <div class="flex gap-10">
        <div class="hidden md:block w-auto xl:w-1/2 h-[480px]">
          <img src="@/assets/img/overview-bg.jpg" class="hidden md:block w-full h-full object-cover object-bottom rounded-md" />
        </div>
        <div class="relative flex flex-col justify-between gap-10">
          <p class="max-w-[600px] text-neutral-5"><ContentDoc path="overview" /></p>
          <div class="grid grid-cols-3 content-center h-32 bg-white border border-neutral-7 rounded-md">
            <div class="flex flex-col items-center gap-2">
              <h5 class="text-primary">6+ Years</h5>
              <p class="font-medium text-neutral-6 uppercase">experiences</p>
            </div>
            <div class="flex flex-col items-center gap-2">
              <h5 class="text-primary">200+</h5>
              <p class="font-medium text-neutral-6 uppercase">projects</p>
            </div>
            <div class="flex flex-col items-center gap-2">
              <h5 class="text-primary">200+</h5>
              <p class="font-medium text-neutral-6 uppercase">clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionDefault>
  <div class="bg-primary">
    <SectionDefault>
      <div class="flex gap-5 md:gap-10">
        <div class="card flex flex-col 3xl:flex-row-reverse 3xl:items-center gap-3 3xl:gap-8 px-4 md:px-6 pt-6 md:pt-8 pb-8 md:pb-10 w-full border-none rounded-md">
          <div class="flex flex-col gap-4">
            <h5 class="pt-2 w-fit border-t-4 border-neutral-2">Our Vision</h5>
            <div class="text-neutral-5">{{ overview.vision }}</div>
          </div>
          <img src="/icon/astronomy.png" class="mx-auto pt-10 3xl:pt-0 w-24 md:w-28">
        </div>
        <div class="card flex flex-col 3xl:flex-row 3xl:items-center gap-3 3xl:gap-8 px-4 md:px-6 pb-6 md:pb-8 pt-8 md:pt-10 w-full border-none rounded-md">
          <img src="/icon/target.png" class="mx-auto pb-10 3xl:pb-0 w-24 md:w-28">
          <div class="flex flex-col gap-4">
            <h5 class="pt-2 w-fit border-t-4 border-neutral-2">Our Mission</h5>
            <div class="text-neutral-5">{{ overview.mission }}</div>
          </div>
        </div>
      </div>
    </SectionDefault>
  </div>
  <SectionDefault>
    <SectionHeading
      header="Core Values"
      title="What We Stand For?"
      class="mx-auto text-center">
      Our values define who we are and guide every decision we make, ensuring we deliver exceptional solutions and build lasting relationships.
    </SectionHeading>
    <div class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 2xl:gap-12 3xl:gap-9 4xl:gap-16">
      <div 
        v-for="(value, index) in overview.values" :key="index"
        class="card flex md:flex-col justify-center items-center gap-6 px-6 py-8 w-full md:size-56 xl:size-72 2xl:size-80 3xl:size-[360px] 4xl:size-96 md:text-center rounded-md">
        <img :src="`/icon/${value.asset}`" class="size-10 xl:size-16" />
        <div class="flex flex-col gap-2">
          <h5>{{ value.name }}</h5>
          <span class="text-neutral-6 text-xs xl:text-sm">{{ value.description }}</span>
        </div>
      </div>
    </div>
  </SectionDefault>
  <div class="relative">
    <img src="@/assets/img/contact-bg.jpg" class="hidden md:block absolute z-0 top-0 left-0 w-1/2 h-full object-cover">
    <div class="relative z-10 flex justify-end text-neutral-9 bg-gradient-to-l from-primary via-primary to-primary md:to-neutral-9/0">
      <div class="space-y-10 md:space-y-16 lg:space-y-20 ml-4 md:ml-0 mr-4 md:mr-8 lg:mr-32 py-10 md:py-16 xl:py-24 w-[480px] xl:w-[600px]">
        <div class="space-y-2">
          <h3>Connect with Us Today</h3>
          <p class="text-neutral-8">We'd love to connect with you! Whether you're curious, have feedback, or just want to chat, our team is here to help.</p>
        </div>
        <NuxtLink to="/contact-us" class="button button-hover-rev secondary">Contact Now</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import overview from '/static/overview.json'

  definePageMeta({
    meta: [
      {
        name: 'description',
        content: 'Learn more about DATIS, a pioneer in smart building technology, fire safety, security systems, and interactive multimedia technology.',
      },
    ],
  })

  const route = useRoute()
	route.meta.title = 'About Us'
</script>

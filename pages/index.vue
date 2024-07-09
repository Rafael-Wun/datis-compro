<template>
  <SectionDefault>
    <SectionHeading
      :header="categories.header"
      :title="categories.title"
      class="mx-auto text-center">
      {{ categories.description }}
    </SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardCategory
        v-for="category in categories.items" :key="category.id"
        :data="category" />
    </div>
  </SectionDefault>
  <div class="relative">
    <img src="@/assets/img/service-bg.jpg" class="hidden md:block absolute z-0 top-0 right-0 w-1/2 h-full object-cover">
    <div class="relative z-10 text-neutral-9 bg-gradient-to-r from-primary via-primary to-primary md:to-neutral-9/0">
      <SectionDefault>
        <div class="hidden md:flex gap-5">
          <NuxtLink v-for="service in featuredServices" :key="service.id"
          :to="`/services/${service.id}`"
          class="flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-medium text-neutral-2 bg-neutral-9 rounded-[4px] md:rounded-md">
            {{ service.name }}
            <span class="icon-[ph--caret-right-bold] aspect-square w-2 md:w-4" />
          </NuxtLink>
        </div>
        <SectionHeading
          title="Discover Our Services"
          :light="true">
          More than just IoT, we offer a comprehensive range of IT services. Discover our diverse categories tailored to meet your unique needs, driving success and satisfaction.
        </SectionHeading>
        <NuxtLink to="/services" class="button button-hover-rev secondary">View All Services</NuxtLink>
      </SectionDefault>
    </div>
  </div>
  <SectionDefault>
    <div class="space-y-10">
      <div class="flex items-center gap-10">
        <div class="space-y-5 md:space-y-8">
          <div class="inline-block px-3 lg:px-5 py-2 lg:py-3 text-[10px] md:text-[11px] lg:text-sm font-medium text-primary bg-primary bg-opacity-25 rounded-[4px] md:rounded-md">Our Records</div>
          <div class="space-y-2">
            <h4>Companies That Use Our Solutions & Services</h4>
            <p class="text-neutral-6">These organizations have leveraged our expertise to enhance their operational efficiency, ensure safety, and achieve technological advancements.</p>
          </div>
        </div>
        <div class="space-y-10 w-36 md:w-2/3">
          <div class="w-full">
            <Swiper
              :modules="[SwiperAutoplay, SwiperPagination]"
              :autoplay="{
                delay: -1,
                disableOnInteraction: false,
                reverseDirection: false,
              }"
              :loop="true"
              :navigation="false"
              :centered-slides="true"
              :space-between="40"
              :speed="4000"
              :breakpoints="breakpoints">
              <SwiperSlide v-for="client in clients" :key="client.name">
                <div class="flex justify-center items-center">
                  <img :src="`/client/${client.asset}`" class="w-auto h-12 xl:h-16 object-contain">
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="w-full">
            <Swiper
              :modules="[SwiperAutoplay, SwiperPagination]"
              :autoplay="{
                delay: -1,
                disableOnInteraction: false,
                reverseDirection: true,
              }"
              :loop="true"
              :navigation="false"
              :centered-slides="true"
              :space-between="40"
              :speed="4000"
              :breakpoints="breakpoints">
              <SwiperSlide v-for="client in clients" :key="client.name">
                <div class="flex justify-center items-center">
                  <img :src="`/client/${client.asset}`" class="w-auto h-12 xl:h-16 object-contain">
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 py-6 bg-white border border-neutral-7 rounded-md">
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
  import categories from '/static/category.json'
  import services from '/static/services.json'
  import clients from '/static/clients.json'

  const breakpoints = {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    }
  }

  useHead({
    title: 'Home'
  })

  const featuredServices = services.items.slice(0, 3)
</script>

<template>
  <SectionDefault>
    <div class="flex gap-8">
      <img src="@/assets/img/overview-bg.jpg" class="hidden md:block w-72 object-cover rounded-md">
      <SectionHeading
        :header="overview.header"
        :title="overview.title">
        Established in 2018, PT. Data Integrasi Semesta (DATIS) has been consistent in empowering businesses as a supplier and service provider for Building Technology, Fire Safety, Security and IT products. As comprehensive value-added services, we also assist our customers in ICT systems integration, software development, consultations, implementation, and operational support.
        <br>
        <br>
        Our technology focuses on:
        <ul class="space-y-2 mt-2 ml-5 list-disc">
          <li>Smart Building Solutions</li>
          <li>Data Center Infrastructure</li>
          <li>Control Room Infrastructure</li>
          <li>Interactive Multimedia Technology</li>
        </ul>
      </SectionHeading>
    </div>
  </SectionDefault>
  <div class="text-neutral-9 bg-primary">
    <SectionDefault>
      <div class="flex flex-col md:flex-row gap-10">
        <div class="space-y-5 w-full">
          <div class="flex items-center gap-2">
            <div class="grid place-content-center p-2 bg-neutral-9 rounded-[4px]">
              <img src="/icon/eye.png" class="size-6" />
            </div>
            <h5>Our Vision</h5>
          </div>
          <div>{{ overview.vision }}</div>
        </div>
        <div class="space-y-5 w-full">
          <div class="flex items-center gap-2">
            <div class="grid place-content-center p-2 bg-neutral-9 rounded-[4px]">
              <img src="/icon/target.png" class="size-6" />
            </div>
            <h5>Our Mission</h5>
          </div>
          <div>{{ overview.mission }}</div>
        </div>
      </div>
    </SectionDefault>
  </div>
  <div class="relative">
    <img src="@/assets/img/contact-bg.jpg" class="hidden md:block absolute z-0 top-0 left-0 w-1/2 h-full object-cover">
    <div class="relative z-10 flex justify-end text-neutral-2 bg-gradient-to-l from-neutral-9 via-neutral-9 to-neutral-9 md:to-neutral-9/0">
      <div class="space-y-10 md:space-y-16 lg:space-y-20 mr-4 md:mr-8 lg:mr-32 py-10 md:py-16 xl:py-24 w-[480px] xl:w-[600px]">
        <div class="space-y-2">
          <h3>Connect with Us Today</h3>
          <p class="text-neutral-6">We'd love to connect with you! Whether you're curious, have feedback, or just want to chat, our team is here to help.</p>
        </div>
        <NuxtLink to="/contact-us" class="button button-hover primary">Contact Now</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import overview from '/static/overview.json'

  useHead({
    title: 'About Us'
  })
  
  const route = useRoute()
	route.meta.title = 'About Us'
</script>

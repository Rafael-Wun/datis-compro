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
</template>

<script lang="ts" setup>
  import overview from '/static/overview.json'

  useHead({
    title: 'About Us'
  })
  
  const route = useRoute()
	route.meta.title = 'About Us'
</script>

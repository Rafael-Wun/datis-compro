<template>
  <SectionDefault>
    <div class="flex flex-col lg:flex-row gap-5 lg:gap-10">
      <div class="space-y-5">
        <SectionHeading
          header="Get in Touch"
          title="Connect with Us">
          We'd love to hear from you! Reach out to us for any inquiries, support, or to learn more about how we can help your business succeed.
        </SectionHeading>
        <form action="https://api.web3forms.com/submit" method="POST" class="space-y-3 xl:space-y-6">
          <input type="hidden" name="access_key" value="bc554548-ef0b-40ac-bb95-9b9c90f4f718">
          <div class="grid gap-2">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" class="px-3 py-2 border border-neutral-7 rounded-md" />
          </div>
          <div class="grid gap-2">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your Email" class="px-3 py-2 border border-neutral-7 rounded-md" />
          </div>
          <div class="grid gap-2">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Your Phone Number" class="px-3 py-2 border border-neutral-7 rounded-md" />
          </div>
          <div class="grid gap-2">
            <label for="msg">Message</label>
            <textarea name="msg" id="msg" placeholder="Your Message" rows="6" class="px-3 py-2 min-h-20 border border-neutral-7 rounded-md" />
          </div>
          <div class="flex justify-end">
            <button class="button button-hover primary" type="submit">Send Message</button>
          </div>
          <div class="h-captcha" data-captcha="true"></div>
        </form>
      </div>
      <div class="w-full border border-neutral-7 rounded-md">
        <iframe class="w-full h-80 xl:h-full rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.522140807084!2d106.71426330112818!3d-6.175598307424142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9da414d6633%3A0x3636a23cc707c277!2sPT%20Data%20Integrasi%20Semesta!5e0!3m2!1sen!2sid!4v1718959211452!5m2!1sen!2sid" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="group flex flex-col justify-center items-center gap-6 min-w-40 p-5 bg-white hover:bg-primary hover:bg-opacity-25 border border-neutral-7 hover:border-primary rounded-md">
        <img src="/icon/call.png" class="size-12 group-hover:animate-bounce">
        <span class="text-neutral-3 font-medium">(021) 2252 4635</span>
      </div>
      <div class="group flex flex-col justify-center items-center gap-6 min-w-40 p-5 bg-white hover:bg-primary hover:bg-opacity-25 border border-neutral-7 hover:border-primary rounded-md">
        <img src="/icon/whatsapp-blue.png" class="size-12 group-hover:animate-bounce">
        <span class="text-neutral-3 font-medium">+62 811 1320 6419</span>
      </div>
      <div class="group flex flex-col justify-center items-center gap-6 min-w-40 p-5 bg-white hover:bg-primary hover:bg-opacity-25 border border-neutral-7 hover:border-primary rounded-md">
        <img src="/icon/email.png" class="size-12 group-hover:animate-bounce">
        <span class="text-neutral-3 font-medium">datis@datis.co.id</span>
      </div>
      <!-- <div class="group flex flex-col justify-center items-center gap-6 min-w-40 p-5 bg-white hover:bg-primary hover:bg-opacity-25 border border-neutral-7 hover:border-primary rounded-md">
        <img src="/icon/email.png" class="size-12 group-hover:animate-bounce">
        <span class="text-neutral-3 font-medium">support@datis.co.id</span>
      </div> -->
    </div>
  </SectionDefault>
</template>

<script lang="ts" setup>
  useHead({
    title: 'Contact Us'
  })

  const route = useRoute()
  route.meta.title = 'Contact Us'
</script>

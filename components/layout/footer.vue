<template>
  <footer class="pt-10 text-xs lg:text-sm text-neutral-9 bg-neutral-2">
    <div class="space-y-10 mx-4 md:mx-8 xl:mx-auto xl:w-4/5">
      <div class="flex flex-col md:flex-row md:flex-wrap-reverse xl:flex-nowrap md:justify-between gap-10 md:gap-8">
        <div class="space-y-5">
          <span class="text-base md:text-lg font-medium">Contact Info</span>
          <div class="space-y-4">
            <div class="flex items-center gap-3 whitespace-nowrap">
              <span class="min-w-6 size-6 fill-neutral-9 icon-[ph--map-pin]"></span>
              <span>Ruko Citywalk Blok C/8<br>Jl. Kresek Raya No. 88, Duri Kosambi<br>Jakarta Barat 11750, Indonesia</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="min-w-6 size-6 fill-neutral-9 icon-[ph--phone]"></span>
              <span>(021) 2252 4635</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="min-w-6 size-6 fill-neutral-9 icon-[ph--whatsapp-logo]"></span>
              <span>+62 811 1320 6419</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="min-w-6 size-6 fill-neutral-9 icon-[ph--envelope-simple]"></span>
              <span>datis@datis.co.id</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-10 md:gap-20 xl:gap-10 4xl:gap-28">
          <div class="space-y-5">
            <NuxtLink to="/category" class="text-base md:text-lg font-medium">Solutions</NuxtLink>
            <div class="flex flex-col gap-4">
              <NuxtLink
                v-for="category in category.items" :key="category.id"
                :to="`/category/${category.id}`"
                class="flex items-center gap-2 hover:text-primary whitespace-nowrap"
              >
                <span class="icon-[ph--caret-double-right-bold]" />
                {{ category.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="space-y-5">
            <NuxtLink to="/services" class="text-base md:text-lg font-medium">Services</NuxtLink>
            <div class="flex flex-col gap-4">
              <NuxtLink
                v-for="service in services.items" :key="service.id"
                :to="`/services/${service.id}`"
                class="flex items-center gap-2 hover:text-primary whitespace-nowrap"
              >
                <span class="icon-[ph--caret-double-right-bold]" />
                {{ service.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="space-y-5">
          <NuxtLink to="/">
            <svg class="w-auto h-6" viewBox="0 0 726 141" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-neutral-9" fill-rule="evenodd" clip-rule="evenodd" d="M99.4026 0.799927C110.177 0.799927 119.422 1.89723 127.138 4.09233C134.853 6.28673 141.172 9.67923 146.094 14.2682C151.016 18.8579 154.641 24.7111 156.969 31.8279C159.297 38.9446 160.461 47.3581 160.461 57.0688V84.2061C160.461 93.9169 159.297 102.331 156.969 109.448C154.641 116.565 151.016 122.418 146.094 127.007C141.172 131.596 134.853 134.988 127.138 137.183C119.422 139.378 110.177 140.476 99.4026 140.476H6.0193C2.0286 140.476 0.0328979 138.48 0.0328979 134.489V73.7388H30.5619V110.146C30.5619 111.875 31.4265 112.74 33.1559 112.74H98.6042C104.457 112.74 109.379 112.208 113.37 111.144C117.361 110.08 120.587 108.351 123.047 105.956C125.508 103.561 127.271 100.368 128.335 96.3777C129.4 92.387 129.932 87.4653 129.932 81.6121V59.6628C129.932 53.8103 129.4 48.888 128.335 44.8972C127.271 40.9065 125.508 37.7142 123.047 35.3197C120.587 32.9251 117.361 31.1958 113.37 30.1317C109.379 29.0676 104.457 28.5355 98.6042 28.5355H72.9718V0.799927H99.4026ZM266.016 0.799927C271.071 0.799927 275.327 1.83093 278.786 3.89223C282.245 5.95413 285.637 9.97863 288.963 15.9644L355.009 135.887C355.674 137.216 355.841 138.314 355.508 139.179C355.175 140.044 354.211 140.476 352.615 140.476H327.274C325.012 140.476 323.482 139.611 322.685 137.882C280.263 60.8047 307.511 110.308 264.22 30.5305C263.688 29.5996 262.956 29.1338 262.025 29.1338H260.828C259.897 29.1338 259.165 29.5996 258.633 30.5305C219.99 102.648 235.63 73.0743 200.967 137.882C200.036 139.611 198.506 140.476 196.377 140.476H170.438C168.708 140.476 167.677 140.044 167.345 139.179C167.012 138.314 167.178 137.216 167.844 135.887L233.292 15.9644C236.617 9.97863 239.877 5.95413 243.069 3.89223C246.261 1.83093 249.986 0.799927 254.243 0.799927H266.016ZM497.878 0.799927C500.937 0.799927 502.467 2.26293 502.467 5.18953V24.7442C502.467 27.804 500.937 29.3332 497.878 29.3332H435.223V136.086C435.223 139.013 433.76 140.476 430.833 140.476H409.084C406.157 140.476 404.694 139.013 404.694 136.086V29.3332H342.039C338.979 29.3332 337.449 27.804 337.449 24.7442V5.18953C337.449 2.26293 338.979 0.799927 342.039 0.799927H497.878ZM546.365 35.8186C549.292 35.8186 550.755 37.2829 550.755 40.2082V136.086C550.755 139.011 549.291 140.476 546.365 140.476H524.816C521.757 140.476 520.226 139.013 520.226 136.086V40.2082C520.226 37.2815 521.756 35.8186 524.816 35.8186H546.365ZM715.972 0.799927C718.898 0.799927 720.362 2.26293 720.362 5.18953V24.1452C720.362 27.0719 718.898 28.5355 715.972 28.5355H616.004C612.146 28.5355 609.419 29.5327 607.822 31.5284C606.226 33.5241 605.428 36.2506 605.428 39.7092V46.4934C605.428 53.9428 608.886 57.6678 615.804 57.6678H690.63C702.203 57.6678 710.916 60.6275 716.77 66.547C722.623 72.4665 725.549 80.9469 725.549 91.9881V107.951C725.549 117.662 722.689 125.511 716.969 131.496C711.249 137.483 702.337 140.476 690.231 140.476H579.688C576.628 140.476 575.098 139.013 575.098 136.086V117.13C575.098 114.203 576.628 112.74 579.688 112.74H684.445C688.303 112.74 691.03 111.742 692.626 109.747C694.222 107.752 695.021 105.024 695.021 101.566V93.3848C695.021 85.9354 691.562 82.2111 684.644 82.2111H609.818C598.245 82.2111 589.532 79.2513 583.679 73.3312C577.825 67.4117 574.899 58.9313 574.899 47.8901V33.324C574.899 23.6132 577.759 15.7649 583.479 9.77853C589.199 3.79283 598.112 0.799927 610.217 0.799927H715.972Z" />
              <path class="fill-neutral-9" fill-rule="evenodd" clip-rule="evenodd" d="M0.0328979 0.799927H30.5619V31.3289H0.0328979V0.799927Z" />
              <path class="fill-neutral-9" fill-rule="evenodd" clip-rule="evenodd" d="M72.9718 73.7388H30.5619V31.3289H72.9718V73.7388Z" />
              <path class="fill-neutral-9" fill-rule="evenodd" clip-rule="evenodd" d="M520.226 0.799927H550.755V31.3289H520.226V0.799927Z" />
              <path class="fill-neutral-9" fill-rule="evenodd" clip-rule="evenodd" d="M245.564 95.3163H276.093V125.845H245.564V95.3163Z" />
            </svg>
          </NuxtLink>
          <p class="max-w-[480px]"><span class="font-semibold">PT. Data Integrasi Semesta</span> is a system integrator company specializing in building services and fire safety engineering, incorporating and implementing the latest technology and IoT solutions.</p>
        </div>
      </div>
      <div class="py-4 text-[9px] md:text-xs text-center border-t border-neutral-9">
        &copy; 2024 PT. Data Integrasi Semesta
        <br>
        All product brands are trademarks of PT. Data Integrasi Semesta
        <br>
        All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
  import category from '/static/category.json'
  import services from '/static/services.json'
</script>

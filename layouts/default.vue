<template>
  <div>
    <LazyLayoutNavbar />
    <LazyLayoutHero />
    <slot />
    <LazyLayoutFooter />
  </div>
  <Teleport to="#teleports">
    <div class="fixed z-50 right-5 md:right-10 bottom-5 md:bottom-10">
      <a href="https://wa.me/6281113206419" target="_blank">
        <div class="p-2 md:p-4 bg-white shadow-2xl shadow-neutral-3 rounded-full">
          <img src="/icon/whatsapp.png" class="size-6 md:size-8" />
        </div>
      </a>
    </div>
  </Teleport>
</template>

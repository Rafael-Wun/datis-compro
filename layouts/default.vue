<template>
  <div>
    <LazyLayoutNavbar />
    <LazyLayoutHero />
    <slot />
    <LazyLayoutFooter />
  </div>
  <Teleport to="#teleports">
    <div class="fixed z-50 right-10 bottom-10">
      
    </div>
  </Teleport>
</template>
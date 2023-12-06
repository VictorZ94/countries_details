<script>
import NavHeader from './NavHeader.vue';
import NavNavigate from './NavNavigate.vue';

export default {
    name: "Sidebar",
    components: {
        NavHeader,
        NavNavigate
    }
}
</script>

<template lang="">
    <nav class="sticky top-0 z-40 sm:hidden md:block h-screen w-72 p-4 bg-primary">
      <NavHeader />
      <div class="bg-primary">
        <NavNavigate />
      </div>
    </nav>
</template>

<style lang="">
    
</style>
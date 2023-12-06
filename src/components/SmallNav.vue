<template lang="">
    <nav
      :class="[isChecked ? 'h-100' : 'h-0']"
      class="px-5 py-8 bg-primary overflow-hidden transition-all"
    >
      <input
        type="checkbox"
        id="menu"
        @click="isChecked = !isChecked"
        class="hidden"
      />
      <label class="relative space-y-1 inline-block mb-2 hover:cursor-pointer" for="menu">
        <span
            :class="{'rotate-45 transition-all': isChecked}"
            class="bg-white block w-8 h-1 select-none"
        ></span>
        <span
          :class="{'hidden': isChecked}"
          class="bg-white block w-8 h-1 select-none"
        ></span>
        <span
          :class="[isChecked ? '-rotate-45 transition-all' : '']"
          class="bg-white block w-8 h-1 select-none"
        ></span>
      </label>
      <NavHeader />
      <div class="bg-primary">
        <NavNavigate />
      </div>
    </nav>
</template>
<script>
import NavNavigate from './NavNavigate.vue';
export default {
    name: "SmallNav",
    data() {
        return {
            isChecked: false
        }
    },
    components: {
        NavNavigate
    }
}
</script>
<style lang="">
    
</style>
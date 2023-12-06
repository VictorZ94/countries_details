<template>
    <div class="relative max-w-sm md:max-w-lg lg:max-w-3xl mx-auto">
      <div class="rounded-full bg-white px-8 lg:px-16 py-2 shadow md:flex md:justify-between md:items-center sombra">
        <div>
          <label
            for="search"
            class="text-md w-full font-semibold text-gray-500"
          >
            Pais
          </label>
          <input
            type="text"
            placeholder="Escribe el país que deseas ver"
            class="block px-0 text-sm text-gray-500 bg-transparent border-0 focus:border-b-2 focus:outline-none focus:ring-0 focus:border-blue-300"
            name="search"
            id="search"
            autoComplete="off"
            v-on:input="$emit('handleChange', $event)"
            v-on:focus="isDropdownOpen = !isDropdownOpen"
          />
          <div
            class="absolute top-20 transition-all dropdown z-10"
            :class="[isDropdownOpen ? 'block' : 'hidden']"
          >
            <slot></slot>
          </div>
        </div>
        <span class="flex justify-center items-center mt-2 px-8 h-10 bg-blue-500 rounded-full text-white text-lg">
          <Search class="mr-2" />
          <span class="">Buscar</span>
        </span>
      </div>
    </div>
</template>

<script>

export default {
    name: "SearchBar",
    props: {
      handleChange: Function
    },
    data() {
        return {
            isDropdownOpen: false
        }
    }
}
</script>
<style>
    
</style>
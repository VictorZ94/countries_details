<template lang="">
    <div class="bg-white block rounded-3xl px-12 py-5">
      <div>
        <div class="flex justify-between">
          <h1 class="text-md text-gray-500">Filtrar por Continente</h1>
          <p
            class="font-semibold text-blue-500 hover:cursor-pointer"
            @click="cleanSelected"
          >
            Limpiar
          </p>
        </div>
        <div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            <div
                v-for="(continent, idx) in continents"
                :key="continent.code"
                @click="updateActiveContinents(continent.code, idx)"
            >
              <div class="w-44 h-36 bg-gray-100 rounded-3xl hover:cursor-pointer">
                <img
                  :src="continent.image"
                  :alt="'Continente ' + continent.name"
                  class="w-full h-full object-fit rounded-3xl"
                  :class="{'shadow-blue-500 shadow-lg': activeContinents.includes(idx)}"
                />
              </div>
              <p class="text-gray-400 pl-4">{{ continent.name }}</p>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import { continents } from '../utils/config';

export default {
    name: "Dropdown",
    props: {
      handleCountrySelected: Function,
    },
    data() {
      return {
        activeContinents: [],
        continents,
      }
    },
    methods: {
      updateActiveContinents(code, index) {
        this.activeContinents = [...this.activeContinents, index]
        this.$emit('handleCountrySelected', code)
      },
      cleanSelected() {
        this.activeContinents = []
        this.$emit('handleCountrySelected', null)
      }
    },
}
</script>

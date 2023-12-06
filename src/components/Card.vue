<template lang="">
    <div
      class="flex justify-center items-center hover:cursor-pointer"
      v-for="(country, idx) in countries"
      :key="country.code"
    >
      <div
        class="max-w-sm border rounded-3xl shadow"
        @click="handleClickCard(country.code)"
      >
        <div class="w-full object-cover">
          <img
            :src="getImage(country.code)"
            :alt="`${country.name} - ${country.continent.name}`"
            class="rounded-t-3xl"
          />
        </div>
        <div
          :class="[selected(country.code) ? 'bg-blue-500' : 'bg-white']"
          class="p-5 rounded-b-3xl flex"
        >
          <span class="inline-block w-16 h-10 text-5xl flag">{{ country.emoji }}</span>
          <div class="pl-2">
            <p
              :class="[selected(country.code) ? 'text-white' : 'text-blue-500']"
              class="font-bold leading-4"
            >
              {{ country.name || "Sin información" }}
            </p>
            <p :class="[selected(country.code) ? 'text-white' : 'text-gray-500']">
              {{ country.continent.name || "Sin información" }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="isOpenWindow"
      class="fixed sm:right-10 md:right-20 lg:right-40 bottom-0">
      <CountryInfo
        @toggle-window="toggleWindow"
        :country-code-selected="countryCodeSelected"
      />
    </div>
</template>

<script>
import defaultImage from "../assets/default.jpg";

// @data
import { countryImages } from "../data/dataImage";
import GetCountries from '../queries/getContries';
import CountryInfo from "./CountryInfo.vue";

export default {
    name: "Card",
    props: {
      search: String,
      continentSelected: Array
    },
    apollo: {
      countries: {
        query: GetCountries,
        variables() {
          return this.variales()
        }
      }
    },
    components: {
      CountryInfo
    },
    data() {
      return {
        defaultImage,
        countries: [],
        countryImages,
        isOpenWindow: false,
        countryCodeSelected: ""
      }
    },
    methods: {
      selected(code) {
        return this.countryCodeSelected === code
      },

      variales() {
        const args = {
          filter: {
            name: {
              regex: `^${this.search}`,
            },
          }
        }

        if (this.continentSelected.length > 0) {
          args.filter = {
            ...args.filter,
            continent: {
              in: [...this.continentSelected],
            },
          };
        }

        return args
      },
      getImage(code) {
        const dataImage = this.countryImages.find(item => item.code === code);
        return dataImage ? dataImage.image : this.defaultImage;
      },

      toggleWindow() {
        this.isOpenWindow = false
      },

      handleClickCard(code) {
        this.isOpenWindow = true; 
        this.countryCodeSelected = code
      }
    }
}
</script>

<style>

.flag {
    line-height: 0.8;
}
</style>

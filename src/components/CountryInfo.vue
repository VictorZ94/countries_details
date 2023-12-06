<template lang="">
  <div class="bg-gray-100 p-5">
      <div class="md:flex md:justify-between">
        <img
          :src="country?.image || defaultImage"
          alt="Country"
          class="rounded-lg max-w-108 h-48"
        />
        <CgClose @click="$emit('toggleWindow', false)"/>
      </div>
      <div class="py-5 rounded-b-3xl flex text-lg">
        <span class="inline-block w-16 h-10 text-5xl flag">
          {{ country?.emoji }}
        </span>
        <div class="pl-2">
          <p class="font-bold leading-4 text-blue-500">
            {{country?.name || "Sin información"}}
          </p>
          <p class="text-gray-500">
            {{country?.continent?.name || "Sin información"}}
          </p>
        </div>
      </div>
      <div class="text-lg">
        <p v-show="country?.capital" class="text-gray-500">
          <span class="text-blue-500 font-bold">Capital: </span>
          {{ country?.capital }}
        </p>
        <p v-show="country?.population" class="text-gray-500">
          <span class="text-blue-500 font-bold">Population: </span>
          {{ country?.population }}
        </p>
        <p v-show="country?.languages" class="text-gray-500">
          <span class="text-blue-500 font-bold">Language: </span>
          {{ country?.languages.map((lang) => lang.name).join(", ") }}
        </p>
        <p v-show="country?.languages" class="text-gray-500">
          <span class="text-blue-500 font-bold">Native: </span>
          {{ country?.languages.map((lang) => lang.native).join(", ") }}
        </p>
        <p v-show="country?.currencies" class="text-gray-500">
          <span class="text-blue-500 font-bold">Currency: </span>
          {{country?.currencies.map((currency) => currency).join(", ")}}
        </p>
        <div v-show="country?.states?.length > 0">
          <p class="text-gray-500">
            <span class="block text-blue-500 pb-2 font-bold">
              Region:
            </span>
          </p>
          <ul class="h-32 max-w-108 text-gray-500 overflow-y-auto p-1 border border-gray-300 shadow-lg">
            <li v-for="state in country?.states" :key="state.name">{{ state.name }}</li>
          </ul>
        </div>
        <p v-show="country?.phone" class="text-gray-500">
          <span class="text-blue-500 font-bold">Phone code: </span>+
          {{ country?.phone }}
        </p>
        <p v-show="country?.code" class="text-gray-500">
          <span class="text-blue-500 font-bold">Code: </span>
          {{ country?.code }}
        </p>
      </div>
    </div>
</template>

<script>
import defaultImage from "../assets/default.jpg";
import { CgClose } from "@kalimahapps/vue-icons";
import GetCountryByCode from "../queries/GetCountryByCode";

export default {
    name: "CountryInfo",
    props: {
      countryCodeSelected: {
        type: String,
      },
      toggleWindow: {
        type: Function,
      }
    },
    apollo: {
      country: {
        query: GetCountryByCode,
        variables() {
          return {
            code: this.countryCodeSelected,
          }
        }
      }
    },
    components: {
      CgClose,
    },
    data() {
      return {
        country: null,
        defaultImage,
      };
    },
    methods: {
      getImage(code) {
        const dataImage = this.countryImages.find(item => item.code === code);
        return dataImage ? dataImage.image : this.defaultImage;
      }
    },
    watch: {
      countryInfo(value) {
        console.log("value", value)
      }
    }
}
</script>
<style lang="">
  
</style>
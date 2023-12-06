<template lang="">
    <div class="block md:flex relative">
        <div class="hidden md:block md:w-72">
            <Sidebar />
        </div>
        <div class="block md:hidden">
            <SmallNav />
        </div>
        <main class="px-4 md:px-8 lg:px-16 py-8 h-full w-full bg-seconday">
          <div>
            <SearchBar @handle-change="updateSearch">
              <Dropdown @handle-country-selected="updateCountrySelected" />
            </SearchBar>
            <div class="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card :search="search" :continentSelected="continentSelected" />
            </div>
          </div>
        </main>
    </div>
</template>

<script>
// @components
import Sidebar from '../components/Sidebar.vue';
import SmallNav from '../components/SmallNav.vue';
import SearchBar from '../components/SearchBar.vue';
import Card from '../components/Card.vue';
import Dropdown from '../components/Dropdown.vue';

export default {
  name: "Home",
  data() {
    return {
      search: "",
      continentSelected: [],
      countryCodeSelected: "",
    }
  },
  components: {
    Sidebar,
    SmallNav,
    SearchBar,
    Card,
    Dropdown,
  },
  methods: {
    updateSearch(e) {
      this.search = e.target.value
    },
    updateCountrySelected(value) {
      if (!value) {
        this.continentSelected = []
        return;
      }
      if (value === "NA,SA") {
        this.continentSelected = [...this.continentSelected, ...value.split(",")]
        return;
      }
      this.continentSelected = [...this.continentSelected, value]
    }
  }
}
</script>

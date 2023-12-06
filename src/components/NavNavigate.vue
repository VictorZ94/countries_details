<template>
    <ul class="px-3 space-y-2">
        <li 
            v-for="item in navItems"
            :key="item.slug"
            :class="[ activeNav === item.slug ? 'bg-white rounded-lg' : '']"
            class="hover:cursor-pointer"
            @click="handleNav(item.slug)"
        >
          <a
            href="#"
            :class="[activeNav === item.slug ? 'text-gray-500' : 'text-white']"
            class="pl-5 font-bold inline-block py-2 w-full">
            {{ item.navName }}
          </a>
        </li>
    </ul>
</template>

<script>
import { navItems } from "../utils/config";

export default {
    name: "NavNavigate",
    data() {
        return {
            activeNav:  "/", //window.location.pathname
            navItems,
        }
    },
    computed: {
        colorNav() {
            return activeNav == item.slug ? "bg-white rounded-lg" : "";
        }
    },
    methods: {
        handleNav(slug) {
            this.activeNav = slug
        }
    }
}

</script>
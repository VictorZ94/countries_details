import { createApp, h } from "vue";
import App from "./App.vue";
import { createApolloProvider } from "@vue/apollo-option";
import { apolloClient } from "./utils/config";

import "./style.css";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      loadingKey: "loading",
      fetchPolicy: "cache-and-network",
    },
  },
  errorHandler(error) {
    console.log("Global error handler");
    console.error(error);
  },
});

const app = createApp({
  render: () => h(App),
});

app.use(apolloProvider).mount("#app");

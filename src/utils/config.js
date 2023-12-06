import { ApolloClient, InMemoryCache } from "@apollo/client/core";

// @containent images
import Europe from "../assets/europe.png";
import America from "../assets/america.png";
import Asia from "../assets/asia.png";
import Oceania from "../assets/oceania.png";
import Africa from "../assets/africa.png";
import Antartica from "../assets/antarctica.png";

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/",
});

export const navItems = [
  {
    navName: "Home",
    slug: "/",
  },
  {
    navName: "Vista 1",
    slug: "/vista1",
  },
  {
    navName: "Vista 2",
    slug: "/vista2",
  },
];

export const continents = [
  {
    code: "EU",
    name: "Europe",
    image: Europe,
  },
  {
    code: "NA,SA",
    name: "America",
    image: America,
  },
  {
    code: "AS",
    name: "Asia",
    image: Asia,
  },
  {
    code: "OC",
    name: "Oceania",
    image: Oceania,
  },
  {
    code: "AF",
    name: "Africa",
    image: Africa,
  },
  {
    code: "AN",
    name: "Antartica",
    image: Antartica,
  },
];

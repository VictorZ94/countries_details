import gql from "graphql-tag";

export default gql`
  query GetAllCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      continent {
        name
        code
      }
      emoji
    }
  }
`;

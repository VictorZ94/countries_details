import { gql } from "graphql-tag";

export default gql`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      awsRegion
      capital
      code
      continent {
        name
        code
      }
      currencies
      currency
      emoji
      emojiU
      languages {
        code
        name
        native
        rtl
      }
      name
      native
      phone
      phones
      states {
        code
        name
      }
      subdivisions {
        code
        name
        emoji
      }
    }
  }
`;

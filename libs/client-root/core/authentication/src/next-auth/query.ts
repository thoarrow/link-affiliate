import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const GET_SHOPS_QUERY = gql`
  query GetShops($ownerId: String!, $first: Int, $offset: Int, $after: String) {
    shops(ownerId: $ownerId, first: $first, offset: $offset, after: $after) {
      nodes {
        id
        name
      }
    }
  }
`;

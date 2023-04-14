import { gql } from '@apollo/client';

export const CREATE_SUBSCRIPTION_QUERY = gql`
  mutation Subscription(
    $user: ID!
    $trader: ID!
    $amount: Float!
    $duration_in_ms: Int!
  ) {
    subscription(
      user: $user
      trader: $trader
      amount: $amount
      duration_in_ms: $duration_in_ms
    ) {
      id
      user {
        username
      }
      trader {
        username
        address
        pnl
      }
      amount
      status
      expiresAt
      createdAt
    }
  }
`;

export const SUBSCRIPTIONS_QUERY = gql`
  query Subscriptions($user: ID!) {
    subscriptions(user: $user) {
      id
      user {
        username
      }
      trader {
        username
        address
        pnl
      }
      amount
      status
      expiresAt
      createdAt
    }
  }
`;

export const CANCEL_SUBSCRIPTION_QUERY = gql`
  mutation CancelSubscription($id: ID!) {
    cancelSubscription(id: $id) {
      id
      user {
        username
      }
      trader {
        username
        address
        pnl
      }
      amount
      status
      expiresAt
      createdAt
    }
  }
`;

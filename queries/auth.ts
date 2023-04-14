import { gql } from '@apollo/client';

export const REGISTER_QUERY = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(email: $email, password: $password, username: $username) {
      token
      user {
        id
        username
        email
        wallet {
          accounts {
            address
          }
        }
      }
    }
  }
`;

export const LOGIN_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        wallet {
          accounts {
            address
          }
        }
      }
    }
  }
`;

export const VERIFY_EMAIL_QUERY = gql`
  mutation VerifyEmail($token: String!) {
    verifyEmail(token: $token) {
      success
      msg
    }
  }
`;

export const PASSWORD_RESET_QUERY = gql`
  mutation PasswordReset($email: String!) {
    resetPassword(email: $email) {
      success
      msg
    }
  }
`;

export const UPDATE_PASSWORD_QUERY = gql`
  mutation UpdatePassword($password: String!, $token: String!) {
    updatePassword(password: $password, token: $token) {
      success
      msg
    }
  }
`;

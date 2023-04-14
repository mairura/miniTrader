import { gql } from '@apollo/client';

export const TRADERS_QUERY = gql`
  query Traders($risk_level: RiskLevel) {
    traders(risk_level: $risk_level) {
      id
      username
      risk_level
      address
      pnl
    }
  }
`;

import { RiskLevel } from '@/types';

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const get_risk_level = (speed: number) => {
  let risk_level: RiskLevel;
  switch (true) {
    case speed < 14.5:
      risk_level = RiskLevel.VERY_LOW;
      break;
    case speed < 29:
      risk_level = RiskLevel.LOW;
      break;
    case speed < 43.5:
      risk_level = RiskLevel.MODERATE_LOW;
      break;
    case speed < 58:
      risk_level = RiskLevel.MODERATE;
      break;
    case speed < 72.5:
      risk_level = RiskLevel.MODERATE_HIGH;
      break;
    case speed < 87:
      risk_level = RiskLevel.HIGH;
      break;

    default:
      risk_level = RiskLevel.VERY_HIGH;
      break;
  }
  return risk_level;
};

import { RiskLevel } from '@/types';
import { createContext } from 'react';

interface ISubscribeContext {
  risk_level: RiskLevel;
  setRiskLevel: (risk_level: RiskLevel) => void;
}

const defaultContext: ISubscribeContext = {
  risk_level: RiskLevel.MODERATE,
  setRiskLevel: (risk_level: RiskLevel) => {},
};

export const SubscribeContext = createContext(defaultContext);

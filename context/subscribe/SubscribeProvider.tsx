import React, { ReactNode } from 'react';
import { SubscribeContext } from './SubscribeContext';
import { RiskLevel } from '@/types';

export const SubscribeProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [risk_level, setRiskLevel] = React.useState<RiskLevel>(
    RiskLevel.MODERATE,
  );

  return (
    <SubscribeContext.Provider value={{ risk_level, setRiskLevel }}>
      {children}
    </SubscribeContext.Provider>
  );
};

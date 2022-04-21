import React from 'react';

import { StyledSpan } from './styles';

export interface SpanProps {
  label: string;
}

export const Span: React.FC<SpanProps> = ({ label }) => {
  return <StyledSpan>{label}</StyledSpan>;
};

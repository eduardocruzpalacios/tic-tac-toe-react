import React from 'react';
import { SpanProps } from './SpanType';
import { SpanStyled } from './styled';

export const Span: React.FC<SpanProps> = ({
  value
}: SpanProps) => (
  <React.Fragment>
    <SpanStyled>
      {value && value}
    </SpanStyled>
  </React.Fragment>
);

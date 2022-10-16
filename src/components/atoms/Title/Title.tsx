import React from 'react';
import { TitleProps } from './TitleType';
import { TitleStyled } from './styled';

export const Title: React.FC<TitleProps> = ({
  value
}: TitleProps) => (
  <React.Fragment>
    <TitleStyled>
      {value && value}
    </TitleStyled>
  </React.Fragment>
);

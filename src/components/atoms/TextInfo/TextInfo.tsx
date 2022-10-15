import React from 'react';
import { TextInfoProps } from './TextInfoType';
import { TextInfoStyled } from './styled';

export const TextInfo: React.FC<TextInfoProps> = ({
  value
}: TextInfoProps) => (
  <React.Fragment>
    <TextInfoStyled>
      {value && value}
    </TextInfoStyled>
  </React.Fragment>
);

import React from 'react';
import { Game } from '../../../components/organisms';
import { Title } from '../../../components/atoms';
import { HeaderStyled, MainStyled } from './styled';

export const MainPage: React.FC = () => {
  const title = 'Tic tac toe';

  return (
    <React.Fragment>
      <HeaderStyled>
        <Title value={title}></Title>
      </HeaderStyled>
      <MainStyled>
        <Game />
      </MainStyled>
    </React.Fragment>
  );
};

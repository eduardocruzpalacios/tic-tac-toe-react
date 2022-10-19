import React, { useState } from 'react';
import { MainPage } from './components/pages';
import { GlobalThemeContext, THEME } from './common/ThemeContext';
import { UniversalStyle } from './AppStyled';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<THEME>(THEME.light);
  return (
    <React.Fragment>
      <GlobalThemeContext.Provider value={{ theme, setTheme }}>
        <UniversalStyle />
        <MainPage />
      </GlobalThemeContext.Provider>
    </React.Fragment >
  );
};

import React, { useState } from 'react';
import { HomePage } from './components/pages';
import { GlobalThemeContext, THEME } from './common/ThemeContext';
import { UniversalStyle } from './AppStyled';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<THEME>(THEME.light);
  return (
    <React.Fragment>
      <GlobalThemeContext.Provider value={{ theme, setTheme }}>
        <UniversalStyle />
        <HomePage />
      </GlobalThemeContext.Provider>
    </React.Fragment >
  );
};

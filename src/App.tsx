import React, { useState } from 'react';
import { MainPage } from './components/pages';
import { GlobalThemeContext, THEME } from './common/ThemeContext';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<THEME>(THEME.dark);
  return (
    <React.Fragment>
      <GlobalThemeContext.Provider value={{ theme, setTheme }}>
        <MainPage />
      </GlobalThemeContext.Provider>
    </React.Fragment >
  );
};

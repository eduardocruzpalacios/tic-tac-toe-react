import React, { useState } from 'react';
import { HomePage } from './components/pages';
import { GlobalThemeContext, THEME } from './common/ThemeContext';
import { UniversalStyle } from './AppStyled';
import { Routes, Route } from 'react-router-dom';
import { SoloGame } from './components/organisms';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<THEME>(THEME.light);
  return (
    <React.Fragment>
      <GlobalThemeContext.Provider value={{ theme, setTheme }}>
        <UniversalStyle />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<SoloGame />} />
            <Route path="*" element={<SoloGame />} />
          </Route>
        </Routes>
      </GlobalThemeContext.Provider>
    </React.Fragment >
  );
};

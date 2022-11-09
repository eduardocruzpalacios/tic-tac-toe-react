import React from 'react';
import { Header, Nav, SoloGame } from '../../organisms';
import { Routes, Route } from 'react-router-dom';

export const HomePage: React.FC = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<SoloGame />} />
        <Route path="*" element={<SoloGame />} />
      </Route>
    </Routes>
  </React.Fragment >
);
